import { Router } from 'express';
import { getAnimeData } from '../controllers/animes';
import { getCharactersByAnime } from '../controllers/characters';
const router = Router();

router.get('/:id', getAnimeData);
router.get('/characters/:id', getCharactersByAnime);

export default router;
