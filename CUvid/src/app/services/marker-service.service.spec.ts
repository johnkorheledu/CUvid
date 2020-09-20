import { TestBed } from '@angular/core/testing';

import { MarkerServiceService } from './marker-service.service';

describe('MarkerServiceService', () => {
  let service: MarkerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
