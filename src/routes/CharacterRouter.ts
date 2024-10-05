import { Router } from 'express';
import { getCharactersByAnime } from '../controllers/CharactersController';

const characterRouter = Router();

characterRouter.get('/:id', getCharactersByAnime);

export default characterRouter;
