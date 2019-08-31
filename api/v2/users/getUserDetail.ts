import { RequestHandler } from 'express';
import { mysqlDb } from '../../../db/dbv2/db';

export const userDetail: RequestHandler = (req, res, next) => {
  const userID = req.params.id;
  // res.send(`User detail is: ${userID}`);
  const sql = `Select * from users where id=${userID}`;
  mysqlDb.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
