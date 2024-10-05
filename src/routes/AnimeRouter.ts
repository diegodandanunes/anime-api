import { Router } from 'express';
import { getAnimeData } from '../controllers/AnimeController';

const animeRouter = Router();

animeRouter.get('/:id', getAnimeData);

export default animeRouter;
