import { TestBed, inject } from '@angular/core/testing';

import { ServerwebService } from './serverweb.service';

describe('ServerwebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerwebService]
    });
  });

  it('should be created', inject([ServerwebService], (service: ServerwebService) => {
    expect(service).toBeTruthy();
  }));
});
