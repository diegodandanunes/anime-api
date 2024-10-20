import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import AnimeRouter from './routes/AnimeRouter';
import CharacterRouter from './routes/CharacterRouter';
import UserRouter from './routes/UserRouter';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(cors());

app.use('/anime', AnimeRouter);
app.use('/characters', CharacterRouter);
app.use('/', UserRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
