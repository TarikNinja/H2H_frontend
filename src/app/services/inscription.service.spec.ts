import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';

describe('InscriptionServiceService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
