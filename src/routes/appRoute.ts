import express from 'express';
import { checkHealth } from '../controllers';

const appRoute = express.Router();

appRoute.get('/health', checkHealth);

export default appRoute;
