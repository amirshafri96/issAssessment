import { TestBed } from '@angular/core/testing';

import { SatelliteServiceService } from './satellite-service.service';

describe('SatelliteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SatelliteServiceService = TestBed.get(SatelliteServiceService);
    expect(service).toBeTruthy();
  });
});
