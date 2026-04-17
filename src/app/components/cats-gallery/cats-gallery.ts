import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CatsStore } from 'src/app/store/cats-store';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cats-gallery',
  templateUrl: './cats-gallery.html',
  styleUrl: './cats-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatProgressSpinner],
})
export class CatsGallery {
  public catsStore = inject(CatsStore);
}
