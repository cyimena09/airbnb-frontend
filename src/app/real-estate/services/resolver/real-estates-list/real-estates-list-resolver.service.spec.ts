import { TestBed } from '@angular/core/testing';

import { RealEstatesListResolverService } from './real-estates-list-resolver.service';

describe('RealEstatesListResolverService', () => {
  let service: RealEstatesListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstatesListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
