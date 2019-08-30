"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiDeleteTour = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.none('delete from tours where id = ${id}', { id: tourID }).then(() => res.json(messages_1.PublicInfo.infoDeleted()));
    // const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    // if (tourIndex > -1) {
    //     DataStore.tours.splice(tourIndex);
    //     res.json(PublicInfo.infoDeleted());
    // }
    // else {
    //     next(APIError.errNotFound());
    // }
};
