import {openai} from './config/apiKey';
import * as fs from 'fs';


const test = async () => {
  // const response = await openai.createImageVariation(
  //   fs.createReadStream('./src/images/halfdome.jpg'),
  //   1,
  //   '1024x1024',
  // );
const response = await openai.createImageVariation(
    {
      img: fs.createReadStream('./src/images/halfdome.jpg'),
      num: 1,
      size: '1024x1024',
    }
  );
  console.log('response', response);
}

test();