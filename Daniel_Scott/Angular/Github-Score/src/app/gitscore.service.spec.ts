import { TestBed, inject } from '@angular/core/testing';

import { GitscoreService } from './gitscore.service';

describe('GitscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitscoreService]
    });
  });

  it('should be created', inject([GitscoreService], (service: GitscoreService) => {
    expect(service).toBeTruthy();
  }));
});
