"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
const caseConverter = require('change-case-object');
exports.apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    res.json(data);
    const sql = db_1.pgp.helpers.update(data, undefined, 'tours') + 'where id = ${id}';
    db_1.db.none(sql, { id: tourID }).then(() => res.json(messages_1.PublicInfo.infoUpdated({ updatedData: data })));
    // with local db sample file
    // const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    // if (tourIndex > -1) {
    //     const originalTour = DataStore.tours[tourIndex];
    //     const newTour = {
    //         id: tourID,
    //         location: req.body.location || originalTour.location,
    //         tourTitle: req.body.tourTitle || originalTour.tourTitle,
    //         tourCategory: req.body.tourCategory || originalTour.tourCategory,
    //         tourDescription: req.body.tourDescription || originalTour.tourDescription,
    //         price: req.body.price || originalTour.price,
    //         currency: req.body.currency || originalTour.currency,
    //         img: originalTour.img
    //     }
    //     DataStore.tours[tourIndex] = newTour;
    //     res.json(PublicInfo.infoUpdated({updatedTour: newTour}));
    // }
    // else {
    //     next(APIError.errNotFound());
    // }
};
