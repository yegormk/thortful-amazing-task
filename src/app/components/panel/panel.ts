import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel, MatPrefix } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';

import { CatsGallery } from 'src/app/components/cats-gallery/cats-gallery';
import { CatBreed } from 'src/app/interfaces/cat-breed.interface';
import { CatImage } from 'src/app/interfaces/cat-image.interface';
import { CatApi } from 'src/app/services/cat-api';
import { CatsStore } from 'src/app/store/cats-store';

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
    MatButton,
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
  private fb = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);
  public catsStore = inject(CatsStore);
  public quantityOptions = [10, 15, 20, 25, 30, 35, 40];

  public searchParamsForm!: FormGroup;
  public filteredOptions!: Observable<CatBreed[]>;

  public ngOnInit(): void {
    this.initState();
    if (!this.catsStore.breeds().length) {
      this.getBreeds();
    }
    this.getCatsPictures();
  }

  private initState(): void {
    this.searchParamsForm = this.fb.group({
      chosenBreed: [],
      quantityOfPictures: 10,
    });

    this.filteredOptions = (
      this.searchParamsForm.get('chosenBreed') as FormControl
    ).valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return this.filterBreeds(name as string);
      })
    );
  }

  private filterBreeds(breedName: string): CatBreed[] {
    const filterValue = breedName.toLowerCase();

    return this.catsStore
      .breeds()
      .filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public displayBreedsFn(catBreed: CatBreed): string {
    return catBreed && catBreed.name ? catBreed.name : '';
  }

  private getBreeds(): void {
    this.catsStore.setBreedsLoading(true);
    this.catApi.getBreeds().subscribe({
      next: (value: CatBreed[]) => {
        this.catsStore.addBreeds(value);
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

  public getCatsPictures(): void {
    this.catsStore.setCatsPicturesLoading(true);
    this.catApi
      .getImagesOfSpecificBreed(
        this.searchParamsForm.get('chosenBreed')?.value?.id,
        this.searchParamsForm.get('quantityOfPictures')?.value
      )
      .subscribe({
        next: (catsImages: CatImage[]) => {
          this.catsStore.addCatsPictures(catsImages);
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
