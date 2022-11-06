import { Request, Response } from 'express';
import fs from 'fs';
import { openai } from '../config/apiKey';

export const imageVariation = async (req: Request, res: Response) => {
  try {
    const img = fs.createReadStream('../images/halfdome.jpg');
    const response = await openai.createImageVariation({
      img: img,
      n: 1,
      size: 1024,
    });
    console.log('response', response);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const imagePrompt = async (req: Request, res: Response) => {
  const { text } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: text,
    max_tokens: 6,
    temperature: 0,
  });

  console.log('response', response.data);
};
