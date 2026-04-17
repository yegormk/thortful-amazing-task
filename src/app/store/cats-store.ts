import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { BreedsStateInterface } from 'src/app/interfaces/breeds-state-interface';
import { CatBreed } from 'src/app/interfaces/cat-breed.interface';
import { CatImage } from 'src/app/interfaces/cat-image.interface';

export const CatsStore = signalStore(
  withState<BreedsStateInterface>({
    breeds: [],
    catsPictures: [],
    error: null,
    breedsLoading: false,
    catsPicturesLoading: false,
  }),
  withMethods(store => ({
    addBreeds(catBreeds: CatBreed[]) {
      patchState(store, { breeds: catBreeds, breedsLoading: false });
    },
    addCatsPictures(catsPictures: CatImage[]) {
      patchState(store, { catsPictures, catsPicturesLoading: false });
    },
    setCatsPicturesLoading(isLoading: boolean) {
      patchState(store, { catsPicturesLoading: isLoading });
    },
    setBreedsLoading(isLoading: boolean) {
      patchState(store, { breedsLoading: isLoading });
    },
  }))
);
