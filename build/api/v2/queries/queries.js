"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queries {
    constructor(data) { }
    static insert(data) {
        return `INSERT INTO recepies Set ?`;
    }
}
exports.Queries = Queries;
// export const insert = `INSERT INTO recepies Set ?`;
