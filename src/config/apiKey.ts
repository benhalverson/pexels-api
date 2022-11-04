import { createClient } from 'pexels';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient(`${process.env.PEXELS_API_KEY}`);

export default client;
