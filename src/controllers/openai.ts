import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from 'express';
import fs from 'fs';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const imageVariation = async (req: Request, res: Response) => {
  const response = await openai.createImageVariation(
    fs.createReadStream('../images/halfdome.jpg'),
    2,
    '1024x1024'
  );
  console.log('response', response);
  res.json(response);
};
