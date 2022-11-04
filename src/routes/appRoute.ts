import express from 'express';
import { protect } from '../error/errorMiddleware';
import { checkHealth } from '../controllers';
import { searchImages, searchVideos } from '../controllers/search';

const appRoute = express.Router();

appRoute.get('/health', checkHealth);
appRoute.post('/image-search', protect(searchImages));
appRoute.post('/video-search', protect(searchVideos));

export default appRoute;
