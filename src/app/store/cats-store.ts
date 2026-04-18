import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { BreedsStateInterface } from 'src/app/interfaces/breeds-state-interface';
import { CatBreed } from 'src/app/interfaces/cat-breed.interface';
import { CatImage } from 'src/app/interfaces/cat-image.interface';

export const CatsStore = signalStore(
  withState<BreedsStateInterface>({
    breeds: [],
    catsPictures: [],
    breedsLoading: false,
    catsPicturesLoading: false,
  }),
  withMethods(store => ({
    /**
     * Save breeds into the store and stop the loading state
     *
     * @param catBreeds
     */
    addBreeds(catBreeds: CatBreed[]) {
      patchState(store, { breeds: catBreeds, breedsLoading: false });
    },

    /**
     * Save cat pictures into the store and stop the loading state
     *
     * @param catsPictures
     */
    addCatsPictures(catsPictures: CatImage[]) {
      patchState(store, { catsPictures, catsPicturesLoading: false });
    },

    /**
     * Update the cat pictures loading flag
     *
     * @param isLoading
     */
    setCatsPicturesLoading(isLoading: boolean) {
      patchState(store, { catsPicturesLoading: isLoading });
    },

    /**
     * Update the breeds loading flag
     *
     * @param isLoading
     */
    setBreedsLoading(isLoading: boolean) {
      patchState(store, { breedsLoading: isLoading });
    },
  }))
);
