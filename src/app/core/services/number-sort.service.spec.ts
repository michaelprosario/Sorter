import { TestBed } from '@angular/core/testing';

import { NumberSortService } from './number-sort.service';

describe('NumberSortServiceService', () => {
  let service: NumberSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
