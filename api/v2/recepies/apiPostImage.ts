import { RequestHandler } from 'express-serve-static-core';
import { fileUploader } from '../fileUploader/fileUploader';
import { PublicInfo } from '../../../model/shared/messages';

export const apiPostImage: RequestHandler = (req, res, next) => {
  const upload = fileUploader(req.app.get('env'));

  upload(req, res, err => {
    if (err) {
      console.log(err);
      res.json('fileUpload Failed');
    } else {
      res.json(PublicInfo.infoCreated({ imgName: req.file.filename }));
    }
  });
};
