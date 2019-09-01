"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetRecepies_1 = require("./apiGetRecepies");
const bodyParser_1 = require("../../v1/general/bodyParser");
const apiCreateRecepie_1 = require("./apiCreateRecepie");
exports.recepiesRouter = express_1.Router();
exports.recepiesRouter
    .route('/')
    .get(apiGetRecepies_1.apiGetRecepies)
    .post(bodyParser_1.jsonParser, apiCreateRecepie_1.apiCreateRecepie);
