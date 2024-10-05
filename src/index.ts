import express, { Request, Response, NextFunction } from 'express';import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import animeRouter from './routes/AnimeRouter';
import characterRouter from './routes/CharacterRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/anime', animeRouter);
app.use('/characters', characterRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
