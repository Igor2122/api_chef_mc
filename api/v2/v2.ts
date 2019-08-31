import { Router } from 'express';
import express = require('express');
import path from 'path';
import { logger } from '../v1/general/logging';
import { apiCors } from '../v1/general/cors';
import { apiValidation } from '../v1/general/validation';
import { apiSessionVerify } from '../v1/auth/apiSessionVerify';
import { userRouter } from './users/apiUsers';
import { recepiesRouter } from './recepies/apiRecepies';

export const routerV2 = Router();

routerV2.use(logger);

routerV2.use(apiCors);

routerV2.use(apiValidation);

routerV2.use(apiSessionVerify);

routerV2.use('/static', express.static(path.resolve('./', 'public', 'img')));

routerV2.get('/', (req, res) => {
  res.send('chef mc app');
});

routerV2.use('/users', userRouter);
routerV2.use('/recepies', recepiesRouter);
