import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel, MatPrefix } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';

import { CatsGallery } from 'src/app/components/cats-gallery/cats-gallery';
import { CatBreed } from 'src/app/interfaces/cat-breed.interface';
import { CatImage } from 'src/app/interfaces/cat-image.interface';
import { CatApi } from 'src/app/services/cat-api';
import { CatsStore } from 'src/app/store/cats-store';
import { LocalStorageHelperService } from 'src/app/services/local-storage-helper';

@Component({
  selector: 'app-panel',
  imports: [
    MatLabel,
    MatFormField,
    MatOption,
    ReactiveFormsModule,
    MatProgressSpinner,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatInput,
    AsyncPipe,
    MatSelect,
    CatsGallery,
    MatIcon,
    MatPrefix,
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Panel implements OnInit {
  private catApi = inject(CatApi);
  private destroyRef = inject(DestroyRef);
  private ls = inject(LocalStorageHelperService);
  private fb = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);
  public catsStore = inject(CatsStore);
  public quantityOptions = [10, 15, 20, 25, 30, 35, 40];

  public searchParamsForm!: FormGroup;
  public filteredOptions!: Observable<CatBreed[]>;

  /**
   * Initialize the panel state and trigger initial data loading
   */
  public ngOnInit(): void {
    this.initState();
    if (!this.catsStore.breeds().length) {
      this.getBreeds();
    } else {
      this.subscribeToChangesFromAutocomplete();
    }
    this.getCatsPictures();
  }

  /**
   * Create the form and wire the filtered autocomplete options
   */
  private initState(): void {
    this.searchParamsForm = this.fb.group({
      chosenBreed: [this.ls.getData('chosenBreed')],
      quantityOfPictures: this.ls.getData('quantityOfPictures') || 10,
    });
  }

  /**
   * Bind autocomplete results to breed input changes.
   */
  private subscribeToChangesFromAutocomplete(): void {
    this.filteredOptions = (
      this.searchParamsForm.get('chosenBreed') as FormControl
    ).valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      startWith(this.ls.getData('chosenBreed')),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return this.filterBreeds(name as string);
      })
    );
  }

  /**
   * Filter breeds by the provided breed name
   *
   * @param breedName
   */
  private filterBreeds(breedName: string): CatBreed[] {
    const filterValue = breedName.toLowerCase();

    return this.catsStore
      .breeds()
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }

  /**
   * Display the breed name inside the autocomplete input
   *
   * @param catBreed
   */
  public displayBreedsFn(catBreed: CatBreed): string {
    return catBreed && catBreed.name ? catBreed.name : '';
  }

  /**
   * Load breeds and save them into the store
   */
  private getBreeds(): void {
    this.catsStore.setBreedsLoading(true);

    this.catApi
      .getBreeds()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value: CatBreed[]) => {
          this.catsStore.addBreeds(value);
          this.subscribeToChangesFromAutocomplete();
        },
        error: error => {
          this.catsStore.setBreedsLoading(false);
          this.searchParamsForm.get('chosenBreed')?.disable();
          this._snackBar.open(`Error: ${error.message ?? 'Failed to load breeds'}`, '', {
            duration: 3000,
          });
        },
      });
  }

  /**
   * Load cat pictures for the selected breed and selected amount of images
   */
  public getCatsPictures(): void {
    this.catsStore.setCatsPicturesLoading(true);
    const chosenBreedId = this.searchParamsForm.get('chosenBreed')?.value;
    const quantityOfPictures = this.searchParamsForm.get('quantityOfPictures')?.value;

    this.catApi
      .getImagesOfSpecificBreed(chosenBreedId?.id, quantityOfPictures)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (catsImages: CatImage[]) => {
          this.catsStore.addCatsPictures(catsImages);
          this.ls.saveData('chosenBreed', chosenBreedId);
          this.ls.saveData('quantityOfPictures', quantityOfPictures);
        },
        error: err => {
          this.catsStore.setCatsPicturesLoading(false);
          this._snackBar.open(`Error: ${err.message ?? 'Failed to load breeds'}`, '', {
            duration: 3000,
          });
        },
      });
  }
}
