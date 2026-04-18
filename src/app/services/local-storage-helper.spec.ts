import { TestBed } from '@angular/core/testing';

import { LocalStorageHelper } from './local-storage-helper';

describe('LocalStorageHelper', () => {
  let service: LocalStorageHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
