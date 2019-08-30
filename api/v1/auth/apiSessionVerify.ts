import { CustomRequestHandler } from '../../../model/express';
import * as jwt from 'jsonwebtoken';
import { sessionTokenSecret } from '../../../config/sessionConf';
import * as dbModel from '../../../db/model_generated';
import { db } from '../../../db/db';
import { APIError } from '../../../model/shared/messages';

export const apiSessionVerify: CustomRequestHandler = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, sessionTokenSecret, (err, decoded: any) => {
      if (err) {
        next(APIError.errUnauthorizedError());
      } else {
        const userId = decoded.userId;
        db.one('select * from users where id = ${id}', { id: userId }).then(
          (user: dbModel.users) => {
            res.json(user);
            console.log(user);
            req.user = user;
            next();
          }
        );
        next();
      }
    });
  } else {
    next();
  }
};
