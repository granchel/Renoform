import { TestBed } from '@angular/core/testing';

import { MolinsService } from './molins.service';

describe('MolinsService', () => {
  let service: MolinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
