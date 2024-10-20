import { Request, Response } from 'express';
import { fetchCharactersByAnime } from '../services/CharacterService';
import { ICharacter } from '../types';

export const getCharactersByAnime = async (req: Request, res: Response) => {
  try {
    const animeId = req.params.id;
    const data = await fetchCharactersByAnime(animeId);

    const response: ICharacter[] = [];

    data.map(char => {
      response.push({
        imagePath: char.character.images.jpg.image_url,
        name: char.character.name,
        role: char.role,
      });
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching character data', error });
  }
};
