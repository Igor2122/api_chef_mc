"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
exports.mysqlDb = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chefmcapp',
    port: 8889
});
//   host: '192.168.64.2',
//   user: 'username',
//   password: 'password',
//   database: 'chefmcapp'
// });
