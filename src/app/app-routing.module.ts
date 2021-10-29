import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdpoublier',
    loadChildren: () => import('./mdpoublier/mdpoublier.module').then( m => m.MdpoublierPageModule)
  },
  {
    path: 'mdpreinitialiser',
    loadChildren: () => import('./mdpreinitialiser/mdpreinitialiser.module').then( m => m.MdpreinitialiserPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./utilisateur/utilisateur.module').then( m => m.UtilisateurPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
