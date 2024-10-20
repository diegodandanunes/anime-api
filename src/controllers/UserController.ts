import { Request, Response } from 'express';
import { fetchUserLogin, createUser } from '../services/UserService';

export const handleUserLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await fetchUserLogin(email, password);

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const handleUserSignup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await createUser(email, password);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};