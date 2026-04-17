import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { CatApi } from '../../services/cat-api';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CatBreed } from '../../interfaces/cat-breed.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CatsStore } from 'src/app/store/cats-store';
import { CatImage } from 'src/app/interfaces/cat-image.interface';
import { MatButton } from '@angular/material/button';
import { CatsGallery } from 'src/app/components/cats-gallery/cats-gallery';

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
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CatsStore],
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
  }

  private initState(): void {
    this.searchParamsForm = this.fb.group({
      chosenBreed: [],
      quantityOfPictures: 10,
    });

    this.catsStore.setBreedsLoading(true);
    this.catApi.getBreeds().subscribe({
      next: (value: CatBreed[]) => {
        this.catsStore.addBreeds(value);
      },
      error: error => {
        this.catsStore.addBreeds([]);
        this.searchParamsForm.get('chosenBreed')?.disable();
        this._snackBar.open(`Error: ${error.message ?? 'Failed to load breeds'}`, '', {
          duration: 3000,
        });
      },
    });

    this.filteredOptions = (
      this.searchParamsForm.get('chosenBreed') as FormControl
    ).valueChanges.pipe(
      startWith(''),
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

  getCatsPictures(): void {
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
        error: () => this.catsStore.addCatsPictures([])
      });
  }
}
