import { Request, Response } from 'express';
import { createClient } from 'pexels';

export const searchImages = async (req: Request, res: Response) => {
  const { query, per_page, page } = req.body;
  const response = await createClient(
    `${process.env.PEXELS_API_KEY}`
  ).photos.search({ query, per_page, page });
  res.json(response);
};

export const searchVideos = async (req: Request, res: Response) => {
  const { query, per_page, page } = req.body;
  const response = await createClient(
    `${process.env.PEXELS_API_KEY}`
  ).videos.search({ query, per_page, page });
  res.json(response);
};

export const health = async (req: Request, res: Response) => {
  res.json({ status: 'ok' });
};
