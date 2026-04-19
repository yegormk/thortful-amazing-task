import { TestBed } from '@angular/core/testing';

import { CatsStore } from './cats-store';

describe('CatsStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatsStore],
    });
  });

  it('stores breeds and resets breedsLoading', () => {
    const store = TestBed.inject(CatsStore);

    store.setBreedsLoading(true);
    store.addBreeds([
      {
        id: 'beng',
        name: 'Bengal',
        origin: 'United States',
        temperament: 'Alert',
      } as never,
    ]);

    expect(store.breedsLoading()).toBe(false);
    expect(store.breeds()[0].id).toBe('beng');
  });

  it('stores cat pictures and resets catsPicturesLoading', () => {
    const store = TestBed.inject(CatsStore);

    store.setCatsPicturesLoading(true);
    store.addCatsPictures([{ id: '1', url: 'https://cats.test/1.jpg', width: 100, height: 100 }]);

    expect(store.catsPicturesLoading()).toBe(false);
    expect(store.catsPictures()[0].id).toBe('1');
  });

  it('updates loading flags independently', () => {
    const store = TestBed.inject(CatsStore);

    store.setBreedsLoading(true);
    store.setCatsPicturesLoading(true);

    expect(store.breedsLoading()).toBe(true);
    expect(store.catsPicturesLoading()).toBe(true);
  });
});
