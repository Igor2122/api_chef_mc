import { Router } from 'express';
import { userDetail } from './getUserDetail';

export const userRouter = Router();

userRouter.get('/:id', userDetail);
