"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/dbv2/db");
const messages_1 = require("../../../model/shared/messages");
exports.apiCreateRecepie = (req, res, next) => {
    const requiredFields = ['title', 'category_id', 'level_id'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(messages_1.APIError.errMissingBody());
    }
    const newRecepie = {
        title: req.body.title || '',
        category_id: req.body.category_id || '',
        level_id: req.body.level_id || '',
        description: req.body.description || '',
        gallery_id: req.body.gallery_id || ''
    };
    const sql = `INSERT INTO recepies Set ?`;
    db_1.mysqlDb.query(sql, newRecepie, (err, result) => {
        if (err) {
            res.send('there was an error');
        }
        else {
            res.send(messages_1.PublicInfo.infoCreated({ id: result.insertId }));
        }
    });
};
