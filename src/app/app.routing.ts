import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/homeScreen/homeScreen.module').then(m => m.HomeScreenModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

