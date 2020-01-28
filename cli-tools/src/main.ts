import inquirer from 'inquirer';

inquirer
  .prompt<{hello: string}>([
    {
      name: 'hello',
      mesage: 'hello world inquirer',
      default: 'hahaha',
    }
  ])
  .then(answers => {
    console.log(answers.hello);
  });
