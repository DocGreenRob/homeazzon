import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/features/app-start/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/features/account/sign-in/sign-in.module').then( m => m.SignInPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
