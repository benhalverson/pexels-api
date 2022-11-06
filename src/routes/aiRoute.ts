import express from 'express';
import { protect } from '../error/errorMiddleware';
import { imagePrompt, imageVariation } from '../controllers/openai';

const searchRoute = express.Router();

searchRoute.get('/variation', protect(imageVariation));
searchRoute.post('/prompt', protect(imagePrompt));

export default searchRoute;
