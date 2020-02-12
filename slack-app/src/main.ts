import { WebClient } from '@slack/web-api';
import { SLACK } from './constants/key';
const slackClient = new WebClient(SLACK.TOKEN);

const main = async () => {
  try {
    const result = await slackClient.chat.postMessage({
      text: 'hello world',
      channel: '#times-araki',
    });
    console.log(result);
  } catch (e) {
    throw e;
  }
}

main()
  .then(() => {
    console.log('done');
  }).catch((e) => {
    console.error(e);
    console.error('fail');
  });
