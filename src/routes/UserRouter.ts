import { Router } from 'express';
import { handleUserLogin, handleUserSignup } from '../controllers/UserController';

const UserRouter = Router();

UserRouter.post('/login', handleUserLogin);
UserRouter.post('/signup', handleUserSignup);

export default UserRouter;
