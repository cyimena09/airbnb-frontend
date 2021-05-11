import { TestBed } from '@angular/core/testing';

import { RealEstateResolverService } from './real-estate-resolver.service';

describe('RealEstateResolverService', () => {
  let service: RealEstateResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
