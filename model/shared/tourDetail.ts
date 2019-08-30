import { TourSummary } from './tourSummary';
import { Review } from './reviews';
import * as dbModel from '../../db/model_generated';
import { toursWithReviews } from '../../db/model_extensions';

export class TourDetail extends TourSummary {
  tourTitle: string;
  tourCategory: string;
  tourDescription: string | null;
  price: number;
  currency: string;
  img: string[];
  reviews: Review[];
  constructor(data: toursWithReviews, tourImages: string[]) {
    super(data);
    this.tourTitle = data.tour_title;
    this.tourCategory = data.tour_category;
    this.tourDescription = data.tour_description;
    this.price = data.price;
    this.currency = data.currency;
    this.img = tourImages;
    this.reviews = data.reviews.map((item: any) => new Review(item));
  }
}
