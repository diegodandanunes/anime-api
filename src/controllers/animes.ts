import { Request, Response } from 'express';
import { fetchAnimeData } from '../services/animeService';

export const getAnimeData = async (req: Request, res: Response) => {
  try {
    const animeId = req.params.id; 
    const data = await fetchAnimeData(animeId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching anime data', error });
  }
};