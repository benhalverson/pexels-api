import express from "express";
import { protect } from "../error/errorMiddleware";
import { searchImages, searchVideos} from "../controllers/search";

const appRoute = express.Router();

appRoute.post('/image-search', protect(searchImages));
appRoute.post('/video-search', protect(searchVideos));

export default appRoute;
