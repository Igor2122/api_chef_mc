import { RequestHandler } from 'express-serve-static-core';
import { fileUploader } from '../fileUploader/fileUploader';
import { PublicInfo } from '../../../model/shared/messages';
import { mysqlDb } from '../../../db/dbv2/db';
import { insertQuery } from '../queries/queries';

export const apiPostImage: RequestHandler = (req, res, next) => {
  const upload = fileUploader(req.app.get('env'));

  upload(req, res, err => {
    if (err) {
      console.log(err);
      res.json('fileUpload Failed');
    } else {
      // res.json(PublicInfo.infoCreated({ imgName: req.file.filename }));

      const fileInfo = {
        imgUrl: req.file.filename || '',
        gallery_id: 1,
        title: 'image'
      };

      const sql = `INSERT INTO medium Set ?`;
      mysqlDb.query(sql, fileInfo, (err, result) => {
        if (err) {
          res.send('file upload failed');
          console.log(err);
        } else {
          res.send(PublicInfo.infoCreated({ imgId: result }));
        }
      });
    }
  });
};
