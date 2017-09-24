import { TestBed, inject } from '@angular/core/testing';

import { BicycleService } from './bicycle.service';

describe('BicycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BicycleService]
    });
  });

  it('should be created', inject([BicycleService], (service: BicycleService) => {
    expect(service).toBeTruthy();
  }));
});
