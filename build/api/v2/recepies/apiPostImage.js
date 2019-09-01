"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileUploader_1 = require("../fileUploader/fileUploader");
const messages_1 = require("../../../model/shared/messages");
exports.apiPostImage = (req, res, next) => {
    const upload = fileUploader_1.fileUploader(req.app.get('env'));
    upload(req, res, err => {
        if (err) {
            console.log(err);
            res.json('fileUpload Failed');
        }
        else {
            res.json(messages_1.PublicInfo.infoCreated({ imgName: req.file.filename }));
        }
    });
};
