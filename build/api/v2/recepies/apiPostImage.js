"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileUploader_1 = require("../fileUploader/fileUploader");
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/dbv2/db");
exports.apiPostImage = (req, res, next) => {
    const upload = fileUploader_1.fileUploader(req.app.get('env'));
    upload(req, res, err => {
        if (err) {
            console.log(err);
            res.json('fileUpload Failed');
        }
        else {
            // res.json(PublicInfo.infoCreated({ imgName: req.file.filename }));
            const fileInfo = {
                imgUrl: req.file.filename || '',
                gallery_id: 1,
                title: 'image'
            };
            const sql = `INSERT INTO medium Set ?`;
            db_1.mysqlDb.query(sql, fileInfo, (err, result) => {
                if (err) {
                    res.send('file upload failed');
                    console.log(err);
                }
                else {
                    res.send(messages_1.PublicInfo.infoCreated({ imgId: result }));
                }
            });
        }
    });
};
