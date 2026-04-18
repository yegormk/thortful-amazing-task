import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CatApi } from 'src/app/services/cat-api';
import { CatsStore } from 'src/app/store/cats-store';

@Component({
  selector: 'app-breeds-library',
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatProgressSpinner
  ],
  templateUrl: './breeds-library.html',
  styleUrl: './breeds-library.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreedsLibrary implements OnInit {
  private catApi = inject(CatApi);
  private destroyRef = inject(DestroyRef);
  public catsStore = inject(CatsStore);
  private _snackBar = inject(MatSnackBar);

  public search = signal('');

  public filteredBreeds = computed(() => {
    const query = this.search().trim().toLowerCase();

    if (!query) {
      return this.catsStore.breeds();
    }

    return this.catsStore.breeds().filter(breed => {
      return (
        breed.name.toLowerCase().includes(query) ||
        breed.origin.toLowerCase().includes(query) ||
        breed.temperament.toLowerCase().includes(query)
      );
    });
  });

  /**
   * Initialize the breeds library page data
   */
  public ngOnInit(): void {
    this.checkPresentBreeds();
  }

  /**
   * Load breeds only when they are not already present in the store
   */
  private checkPresentBreeds(): void {
    if (!this.catsStore.breeds().length) {
      this.catsStore.setBreedsLoading(true);
      this.catApi.getBreeds().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: breeds => {
          this.catsStore.addBreeds(breeds);
        },
        error: error => {
          this.catsStore.setBreedsLoading(false);
          this._snackBar.open(`Error: ${error.message ?? 'Failed to load breeds'}`, '', {
            duration: 3000,
          });
        },
      });
    }
  }

  /**
   * Update the local search query for filtering breeds
   *
   * @param value
   */
  public updateSearch(value: string): void {
    this.search.set(value);
  }
}
