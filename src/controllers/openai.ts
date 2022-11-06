import { Request, Response } from 'express';
import * as fs from 'fs';
import { openai } from '../config/apiKey';

export const imageVariation = async (req: Request, res: Response) => {
  const response = await openai.createImageVariation(
    fs.createReadStream('./src/images/halfdome.jpg'),
    1,
    '1024x1024',
  );
  console.log('response', response);
  res.json(response);
};

export const imagePrompt = async (req: Request, res: Response) => {
  const { text } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: text,
  });

  console.log('response', response.data);
};
