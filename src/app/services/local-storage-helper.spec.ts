import { TestBed } from '@angular/core/testing';

import { LocalStorageHelperService } from './local-storage-helper';

describe('LocalStorageHelperService', () => {
  let service: LocalStorageHelperService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageHelperService);
  });

  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('saves and reads structured values', () => {
    service.saveData('settings', { pageSize: 10, breed: 'beng' });

    expect(service.getData<{ pageSize: number; breed: string }>('settings')).toEqual({
      pageSize: 10,
      breed: 'beng',
    });
  });

  it('returns null for missing keys', () => {
    expect(service.getData('missing')).toBeNull();
  });

  it('returns null and logs when stored JSON is invalid', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    localStorage.setItem('broken', '{not-json');

    expect(service.getData('broken')).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('removes a single key', () => {
    service.saveData('one', 1);
    service.removeData('one');

    expect(localStorage.getItem('one')).toBeNull();
  });

  it('clears all local storage values', () => {
    service.saveData('one', 1);
    service.saveData('two', 2);

    service.clearData();

    expect(localStorage.length).toBe(0);
  });
});
