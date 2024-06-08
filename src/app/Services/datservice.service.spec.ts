import { TestBed } from '@angular/core/testing';

import { DatserviceService } from './datservice.service';

describe('DatserviceService', () => {
  let service: DatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
