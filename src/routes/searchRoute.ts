import express from 'express';
import { protect } from '../error/errorMiddleware';
import { searchImages, searchVideos } from '../controllers/search';

const searchRoute = express.Router();

searchRoute.post('/image-search', protect(searchImages));
searchRoute.post('/video-search', protect(searchVideos));

export default searchRoute;
