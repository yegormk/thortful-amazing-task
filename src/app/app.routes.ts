import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cats-search',
  },
  {
    path: 'cats-search',
    loadComponent: () =>
      import('src/app/components/panel/panel').then((m) => m.Panel),
  },
  {
    path: 'breeds-library',
    loadComponent: () =>
      import('src/app/components/breeds-library/breeds-library').then((m) => m.BreedsLibrary),
  },
];
