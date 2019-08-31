"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require("express");
const path_1 = __importDefault(require("path"));
const logging_1 = require("../v1/general/logging");
const cors_1 = require("../v1/general/cors");
const validation_1 = require("../v1/general/validation");
const apiSessionVerify_1 = require("../v1/auth/apiSessionVerify");
const apiUsers_1 = require("./users/apiUsers");
const apiRecepies_1 = require("./recepies/apiRecepies");
exports.routerV2 = express_1.Router();
exports.routerV2.use(logging_1.logger);
exports.routerV2.use(cors_1.apiCors);
exports.routerV2.use(validation_1.apiValidation);
exports.routerV2.use(apiSessionVerify_1.apiSessionVerify);
exports.routerV2.use('/static', express.static(path_1.default.resolve('./', 'public', 'img')));
exports.routerV2.get('/', (req, res) => {
    res.send('chef mc app');
});
exports.routerV2.use('/users', apiUsers_1.userRouter);
exports.routerV2.use('/recepies', apiRecepies_1.recepiesRouter);
