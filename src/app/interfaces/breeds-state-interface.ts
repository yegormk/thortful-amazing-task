import { CatBreed } from './cat-breed.interface';
import { CatImage } from 'src/app/interfaces/cat-image.interface';

export interface BreedsStateInterface {
  breeds: CatBreed[];
  catsPictures: CatImage[];
  breedsLoading: boolean;
  catsPicturesLoading: boolean;
  error: string | null;
}
