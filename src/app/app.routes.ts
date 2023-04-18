import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/components/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/components/button/button.page').then(m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/components/card/card.page').then( m => m.CardPage)
  },
];
