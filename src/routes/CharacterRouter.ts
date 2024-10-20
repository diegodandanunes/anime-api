import { Router } from 'express';
import { getCharactersByAnime } from '../controllers/CharactersController';
import { checkJwt } from '../middlewares/jwtHandler';

const characterRouter = Router();

characterRouter.get('/:id', checkJwt, getCharactersByAnime);

export default characterRouter;
