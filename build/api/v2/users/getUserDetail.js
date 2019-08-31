"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../db/dbv2/db");
exports.userDetail = (req, res, next) => {
    const userID = req.params.id;
    // res.send(`User detail is: ${userID}`);
    const sql = `Select * from users where id=${userID}`;
    db_1.mysqlDb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
};
