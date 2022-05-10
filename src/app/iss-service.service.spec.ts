import { TestBed } from '@angular/core/testing';

import { ISSServiceService } from './iss-service.service';

describe('ISSServiceService', () => {
  let service: ISSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ISSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
