import { TestBed } from '@angular/core/testing';

import { QolResultService } from './qol-result.service';

describe('QolResultService', () => {
  let service: QolResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QolResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
