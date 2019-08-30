"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourDetail_1 = require("../../../model/shared/tourDetail");
const static_1 = require("../general/static");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
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
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.one(
    //   t is an alias for tour table
    'select t.*,\
    (select json_agg(reviews)\
    from reviews where tour_id = ${id}\
    ) as reviews\
    from tours as t\
    where t.id = ${id}', { id: tourID })
        .then((data) => {
        const imgNames = data.img || [];
        const imageURLs = imgNames.map(static_1.fileMapper(req.app.get('env')));
        res.json(new tourDetail_1.TourDetail(data, imageURLs));
    })
        .catch(() => {
        res.json(messages_1.APIError.errNotFound());
        // res.json(tourID);
    });
};
