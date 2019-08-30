import { RequestHandler } from 'express';
import * as firebaseAdmin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { db, pgp } from '../../../db/db';
import * as dbModel from '../../../db/model_generated';
import { CustomRequestHandler } from '../../../model/express';
import { apiSessionGenerate } from './apiSessionGenerate';

export const apiTokenSignIn: CustomRequestHandler = (req, res, next) => {
  const confFile = process.env.FIREBASE_CONF || 'firebase_dev.json';
  const confFilePath = path.resolve('.', 'config', confFile);
  const conf = JSON.parse(fs.readFileSync(confFilePath).toString());

  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(conf),
      databaseURL: 'https://l2app-7816a.firebaseio.com'
    });
  }

  firebaseAdmin
    .auth()
    .verifyIdToken(req.body.idToken)

    .then(decodedToken => {
      res.json(decodedToken); // all the user info will be in the response
      const userID = decodedToken.uid;

      db.one('select * from users where id = ${id}', { id: userID })
        .then((user: dbModel.users) => {
          res.json(user);

          // Generate session token
          req.user = user;
          apiSessionGenerate(req, res, next);
        })
        .catch(err => {
          if (err.code === pgp.errors.queryResultErrorCode.noData) {
            const user: dbModel.users = {
              id: userID,
              email: decodedToken.email,
              name: decodedToken.name
            };
            db.none(pgp.helpers.insert(user, undefined, 'users')).then(() => {
              // res.json(user);
              // Generate session token
              req.user = user;
              apiSessionGenerate(req, res, next);
            });
          }
        });
    });
};
