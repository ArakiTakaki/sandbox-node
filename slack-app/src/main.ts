import dotenv from 'dotenv';
import * as path from 'path';
const CONSTANTS = dotenv.parse(path.resolve('.env'));

// init
const initialize = () => {
  console.log(CONSTANTS);
};


initialize();


