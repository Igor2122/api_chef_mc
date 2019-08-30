"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db/db");
class TourFilters {
    constructor(data) {
        this.getCondition = () => {
            const filterCondition = [
                this.location ? 'location= ${location}' : 'true',
                this.priceMin ? 'priceMin= ${priceMin}' : 'true',
                this.priceMax ? 'priceMax= ${priceMax}' : 'true'
            ].join(' AND ');
            return db_1.pgp.as.format(filterCondition, this);
        };
        this.location = data.location;
        this.priceMin = data.priceMin;
        this.priceMax = data.priceMax;
    }
}
exports.TourFilters = TourFilters;
