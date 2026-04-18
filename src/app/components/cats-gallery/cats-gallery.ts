import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { CatsStore } from 'src/app/store/cats-store';

@Component({
  selector: 'app-cats-gallery',
  templateUrl: './cats-gallery.html',
  styleUrl: './cats-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressSpinner, MatPaginator],
})
export class CatsGallery {
  public catsStore = inject(CatsStore);
  public pageIndex = signal(0);
  public pageSize = signal(5);

  public paginatedPictures = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.catsStore.catsPictures().slice(start, start + this.pageSize());
  });

  /**
   * Update pagination state when the paginator page changes
   *
   * @param event
   */
  public onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
