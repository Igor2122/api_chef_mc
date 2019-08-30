import { RequestHandler } from 'express';
import { TourDetail } from '../../../model/shared/tourDetail';
import { fileMapper } from '../general/static';
import { APIError } from '../../../model/shared/messages';
import * as dbModel from '../../../db/model_generated';
import { db } from '../../../db/db';
import { toursWithReviews } from '../../../db/model_extensions';

// export const apiGetTourDetail: RequestHandler = (req, res, next) => {
// const tourID = req.params.id;
// db.one('select * from tours where id = ${id}', { id: tourID }).then(
// (selectedTour: dbModel.tours) => {
//     if (selectedTour) {
//     const imgNames = selectedTour.img || [];
//     const imageURLs = imgNames.map(fileMapper(req.app.get('env')));
//     db.any('select * from reviews where tour_id = ${id}', {
//         id: tourID
//     }).then((selectedReviews: dbModel.reviews[]) => {
//         res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
//     });
//     } else {
//     res.json(APIError.errNotFound());
//     }
// }
// );
// };

// ALTERNATIVE WITH JSON SUPPORT FROM POSTGRESS:

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  db.one(
    //   t is an alias for tour table
    'select t.*,\
    (select json_agg(reviews)\
    from reviews where tour_id = ${id}\
    ) as reviews\
    from tours as t\
    where t.id = ${id}',
    { id: tourID }
  )
    .then((data: toursWithReviews) => {
      const imgNames = data.img || [];
      const imageURLs = imgNames.map(fileMapper(req.app.get('env')));
      res.json(new TourDetail(data, imageURLs));
    })
    .catch(() => {
      res.json(APIError.errNotFound());
      // res.json(tourID);
    });
};
