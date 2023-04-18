import { TestBed } from '@angular/core/testing';

import { HosbitalService } from './hosbital.service';

describe('HosbitalService', () => {
  let service: HosbitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosbitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
