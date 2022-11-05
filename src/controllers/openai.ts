import { Configuration, OpenAIApi } from 'openai';
import { Request, Response } from 'express';
import fs from 'fs';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const imageVariation = async (req: Request, res: Response) => {
  try {
    const img = fs.createReadStream('../images/halfdome.jpg');
    const response = await openai.createImageVariation({
      img: img,
      n: 1,
      size: '1024x1024',
    });
    console.log('response', response);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const imagePrompt = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const response = await openai.createImage(
      {
        prompt: text,
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('response', response);
    res.json(response);
  } catch (error) {
    console.log('error', error);
  }
};
