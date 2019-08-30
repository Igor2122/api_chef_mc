import { RequestHandler } from 'express';
import * as dbModel from '../../../db/model_generated';

import { TourSummary } from '../../../model/shared/tourSummary';
import { TourFilters } from '../../../model/shared/tourFilters';
import { db } from '../../../db/db';

export const apiGetTours: RequestHandler = (req, res, next) => {
  const filters = new TourFilters(req.query);
  db.any('select * from tours where ${condition:raw}', {
    condition: filters.getCondition()
  }).then(tours =>
    res.json(tours.map((item: dbModel.tours) => new TourSummary(item)))
  );
};
