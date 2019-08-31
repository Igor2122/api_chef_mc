"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserDetail_1 = require("./getUserDetail");
exports.userRouter = express_1.Router();
exports.userRouter.get('/:id', getUserDetail_1.userDetail);
