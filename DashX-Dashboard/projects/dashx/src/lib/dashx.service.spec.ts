import { TestBed } from '@angular/core/testing';

import { DashxService } from './dashx.service';

describe('DashxService', () => {
  let service: DashxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
