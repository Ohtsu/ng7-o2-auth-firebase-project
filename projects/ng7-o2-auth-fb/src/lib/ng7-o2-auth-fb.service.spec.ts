import { TestBed } from '@angular/core/testing';

import { Ng7O2AuthFbService } from './ng7-o2-auth-fb.service';

describe('Ng7O2AuthFbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7O2AuthFbService = TestBed.get(Ng7O2AuthFbService);
    expect(service).toBeTruthy();
  });
});
