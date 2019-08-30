import { pgp } from '../../db/db';

export class TourFilters {
  readonly location: string;
  readonly priceMin: number;
  readonly priceMax: number;
  constructor(data: any) {
    this.location = data.location;
    this.priceMin = data.priceMin;
    this.priceMax = data.priceMax;
  }

  getCondition = () => {
    const filterCondition = [
      this.location ? 'location= ${location}' : 'true',
      this.priceMin ? 'priceMin= ${priceMin}' : 'true',
      this.priceMax ? 'priceMax= ${priceMax}' : 'true'
    ].join(' AND ');

    return pgp.as.format(filterCondition, this);
  };
}
