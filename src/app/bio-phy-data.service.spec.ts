import { TestBed } from '@angular/core/testing';

import { BioPhyDataService } from './bio-phy-data.service';

describe('BioPhyDataService', () => {
  let service: BioPhyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioPhyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
