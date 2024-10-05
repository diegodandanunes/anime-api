import { Request, Response } from 'express';
import { fetchAnimeData } from '../services/AnimeService';
import { IAnime } from '../types';

export const getAnimeData = async (req: Request, res: Response) => {
  try {
    const animeId = req.params.id; 
    const data = await fetchAnimeData(animeId);

    const response: IAnime = {
      episodes: data.episodes,
      imagePath: data.images.jpg.large_image_url,
      name: data.titles[0].title,
      score: data.score,
      trailerUrl: data.trailer.url,
    };

    res.status(200).json(response);
  } catch (error) { 
    res.status(500).json({ message: 'Error fetching anime data', error });
  }
};