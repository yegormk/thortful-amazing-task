import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

import { CatsStore } from 'src/app/store/cats-store';

@Component({
  selector: 'app-root',
  imports: [
    MatIcon,
    MatIconButton,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CatsStore]
})
export class App {
}
