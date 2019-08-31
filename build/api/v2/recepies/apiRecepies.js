"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetRecepies_1 = require("./apiGetRecepies");
exports.recepiesRouter = express_1.Router();
exports.recepiesRouter.get('/', apiGetRecepies_1.apiGetRecepies);
