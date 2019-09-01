import { Router } from 'express';
import { apiGetRecepies } from './apiGetRecepies';
import { jsonParser } from '../../v1/general/bodyParser';
import { apiCreateTour } from '../../v1/tours/apiCreateTour';
import { apiCreateRecepie } from './apiCreateRecepie';

export const recepiesRouter = Router();

recepiesRouter
  .route('/')
  .get(apiGetRecepies)
  .post(jsonParser, apiCreateRecepie);
