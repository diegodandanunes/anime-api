import { Router } from 'express';
import { getAnimeData } from '../controllers/AnimeController';
import { checkJwt } from '../middlewares/jwtHandler';

const animeRouter = Router();

animeRouter.get('/:id', checkJwt, getAnimeData);

export default animeRouter;
