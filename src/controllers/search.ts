import { Request, Response } from 'express';
import { client } from '../config/apiKey';

export const searchImages = async (req: Request, res: Response) => {
  const { query, per_page, page } = req.body;
  const results = await client.photos.search({ query, per_page, page });
  res.status(200).json(results);
};

export const searchVideos = async (req: Request, res: Response) => {
  const { query, per_page, page } = req.body;
  const results = await client.videos.search({ query, per_page, page });
  res.status(200).json(results);
};
