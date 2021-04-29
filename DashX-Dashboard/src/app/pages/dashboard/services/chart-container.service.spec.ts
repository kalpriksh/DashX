import { TestBed } from '@angular/core/testing';

import { ChartContainerService } from './chart-container.service';

describe('ChartContainerService', () => {
  let service: ChartContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
