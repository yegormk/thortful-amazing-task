import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  effect, untracked
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { EmptyStateMessage } from 'src/app/components/empty-state-message/empty-state-message';
import { CatsStore } from 'src/app/store/cats-store';

@Component({
  selector: 'app-cats-gallery',
  templateUrl: './cats-gallery.html',
  styleUrl: './cats-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmptyStateMessage, MatProgressSpinner, MatPaginator],
})
export class CatsGallery {
  public catsStore = inject(CatsStore);
  public pageIndex = signal(0);
  public pageSize = signal(5);

  /**
   * HOTFIX: There was a bug with pagination and a lack of images :(
   * But anyway, we can see on this example - how the effect works with the untracked method inside.
   * Sorry, I've just seen this 🙏
   */
  trackForChangesInTheStore = effect(() => {
    this.catsStore.catsPictures();
    untracked(() => this.pageIndex.set(0));
  });

  /**
   * Slice the store pictures array according to the current paginator state
   */
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
