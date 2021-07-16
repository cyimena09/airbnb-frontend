export class RealEstateFilter {
  category: string;
  type: string;
  city: string;
  country: string;
  minBedroom: number;
  maxBedroom: number;
  minPrice: number;
  maxPrice: number;
  startDate: any;
  endDate: any;
  byAvailability: boolean = true;
}
