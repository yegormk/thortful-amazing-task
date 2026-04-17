import { Routes } from '@angular/router';
import { Panel } from 'src/app/components/panel/panel';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cats',
  },
  {
    path: 'cats',
    component: Panel,
  },
];
