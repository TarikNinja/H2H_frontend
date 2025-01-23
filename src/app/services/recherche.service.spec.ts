import { TestBed } from '@angular/core/testing';

import { RechercheService } from './recherche.service';

describe('RechercheServiceService', () => {
  let service: RechercheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechercheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
