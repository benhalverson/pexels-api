import { createClient } from 'pexels';
import dotenv from 'dotenv';
import {Configuration, OpenAIApi } from 'openai';
dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(config);

export const client = createClient(`${process.env.PEXELS_API_KEY}`);


