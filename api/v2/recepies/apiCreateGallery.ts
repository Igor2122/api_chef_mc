import { RequestHandler } from 'express-serve-static-core';
import { mysqlDb } from '../../../db/dbv2/db';
import { APIError, PublicInfo } from '../../../model/shared/messages';

export const apiCreateGallery: RequestHandler = (req, res, next) => {
  const defTitle = {
    title: 'sample'
  };

  const sql = `INSERT INTO gallery Set ? `;

  mysqlDb.query(sql, defTitle, (err, result) => {
    if (err) {
      console.log(err);
      next(new APIError('failed', 'something went wrong', 400));
    } else {
      res.send(PublicInfo.infoCreated({ galleryId: result.insertId }));
    }
  });
};
