import { TestBed } from '@angular/core/testing';

import { VersatileNotifService } from './versatile-notif.service';

describe('VersatileNotifService', () => {
  let service: VersatileNotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersatileNotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
