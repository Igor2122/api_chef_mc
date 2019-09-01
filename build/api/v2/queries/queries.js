"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queries {
    constructor(data) { }
    static insert(data) {
        return `INSERT INTO recepies Set ?`;
    }
}
exports.Queries = Queries;
exports.insertQuery = `INSERT INTO recepies Set ?`;
