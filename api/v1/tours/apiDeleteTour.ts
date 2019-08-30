import { RequestHandler } from 'express';
import { PublicInfo, APIError } from '../../../model/shared/messages';
import { db } from '../../../db/db';

export const apiDeleteTour: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  db.none('delete from tours where id = ${id}', { id: tourID }).then(() =>
    res.json(PublicInfo.infoDeleted())
  );

  // const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
  // if (tourIndex > -1) {
  //     DataStore.tours.splice(tourIndex);
  //     res.json(PublicInfo.infoDeleted());
  // }
  // else {
  //     next(APIError.errNotFound());
  // }
};
