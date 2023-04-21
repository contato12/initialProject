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
  {
    path: 'alert',
    loadComponent: () => import('./pages/components/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/components/accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'actionsheet',
    loadComponent: () => import('./pages/components/actionsheet/actionsheet.page').then( m => m.ActionsheetPage)
  },
  {
    path: 'tags',
    loadComponent: () => import('./pages/components/tags/tags.page').then( m => m.TagsPage)
  },
  {
    path: 'javascript',
    loadComponent: () => import('./pages/components/javascript/javascript.page').then( m => m.JavascriptPage)
  },
];
