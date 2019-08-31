import { Router } from 'express';
import { apiGetRecepies } from './apiGetRecepies';

export const recepiesRouter = Router();

recepiesRouter.get('/', apiGetRecepies);
