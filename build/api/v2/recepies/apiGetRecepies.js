"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/dbv2/db");
exports.apiGetRecepies = (req, res, next) => {
    const sql = 'SELECT * FROM recepies';
    const queryParams = req.query;
    db_1.mysqlDb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result.filter((res) => res.id == queryParams.id));
        }
    });
};
