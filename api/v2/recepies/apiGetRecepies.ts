import { RequestHandler } from 'express';
import { mysqlDb } from '../../../db/dbv2/db';

export const apiGetRecepies: RequestHandler = (req, res, next) => {
  const sql = 'SELECT * FROM recepies';
  const queryParams = req.query;

  mysqlDb.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.send(queryParams);
      res.send(result.filter((res: any) => res.id == queryParams.id));
    }
  });
};
