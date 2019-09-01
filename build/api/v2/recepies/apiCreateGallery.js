"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/dbv2/db");
const messages_1 = require("../../../model/shared/messages");
exports.apiCreateGallery = (req, res, next) => {
    const defTitle = {
        title: 'sample'
    };
    const sql = `INSERT INTO gallery Set ? `;
    db_1.mysqlDb.query(sql, defTitle, (err, result) => {
        if (err) {
            console.log(err);
            next(new messages_1.APIError('failed', 'something went wrong', 400));
        }
        else {
            res.send(messages_1.PublicInfo.infoCreated({ galleryId: result.insertId }));
        }
    });
};
