import { Request, Response } from 'express';
import { fetchCharactersByAnime } from '../services/CharacterService';

export const getCharactersByAnime = async (req: Request, res: Response) => {
  try {
    const animeId = req.params.id;
    const data = await fetchCharactersByAnime(animeId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching character data', error });
  }
};
