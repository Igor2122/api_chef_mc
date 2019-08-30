"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetUserDetail_1 = require("./apiGetUserDetail");
const apiAddUser_1 = require("./apiAddUser");
const apiDeleteUser_1 = require("./apiDeleteUser");
const apiUpdateUser_1 = require("./apiUpdateUser");
exports.userRouter = express_1.Router();
exports.userRouter.get("/:id", apiGetUserDetail_1.apiGetUserDetail);
exports.userRouter.post("/", apiAddUser_1.apiAddUser);
exports.userRouter.delete("/:id", apiDeleteUser_1.apiDeleteUser);
exports.userRouter.patch("/:id", apiUpdateUser_1.apiUpdateUser);
