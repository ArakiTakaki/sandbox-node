import * as express from 'express';
import * as expressGraphql from 'express-graphql';
import {buildSchema} from 'graphql';
import * as crypto from 'crypto';

const schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

class Message {
  public id: string;
  public content: string;
  public author: string;
  constructor(id: string, {content, author}: {content: string; author: string}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

interface IMessageInput {
  content: string;
  author: string;
}

const fakeDatabase: {[key: string]: any} = {};

const root = {
  getMessage: ({id}: {id: string}) => {
    return new Message(id, fakeDatabase[id]);
  },
  createMessage: ({input}: {input: IMessageInput}) => {
    const id = crypto.randomBytes(10).toString('hex');
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage: ({id, input}: {id: string, input: IMessageInput}) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

const app = express();
app.use('/graphql', expressGraphql({
  schema: schema,
  rootValue: root,
  graphiql: true, // GUIモード
}));
app.listen(4000);

console.log('start to localhost 4000');
