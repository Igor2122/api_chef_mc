import { RequestHandler } from 'express';
import * as DbModel from '../../../db/sqlRecepieModel';
import { mysqlDb } from '../../../db/dbv2/db';
import { PublicInfo } from '../../../model/shared/messages';

export const apiCreateRecepie: RequestHandler = (req, res, next) => {
  const requiredFields = ['title', 'category_id', 'level_id'];
  const givenFields = Object.getOwnPropertyNames(req.body);

  const newRecepie: DbModel.IRecepie = {
    title: req.body.title || '',
    category_id: req.body.category_id || '',
    level_id: req.body.level_id || '',
    description: req.body.description || '',
    gallery_id: req.body.gallery_id || ''
  };

  const sql = `INSERT INTO recepies Set ?`;

  mysqlDb.query(sql, newRecepie, (err, result) => {
    if (err) {
      res.send('there was an error');
    } else {
      res.send(PublicInfo.infoCreated({ id: result.insertId }));
    }
  });
  // res.send(newRecepie);
};
