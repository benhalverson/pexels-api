import dotenv from 'dotenv';
dotenv.config();

import { generateAsync } from 'stability-client';


async function main() {
try {
  const response = await generateAsync({
    prompt: 'A Stunning House',
    apiKey: process.env.DREAMSTUDIO_API_KEY as string,
  })
  console.log(response);
} catch (e) {
  console.error('Error', e)
}
}

main()