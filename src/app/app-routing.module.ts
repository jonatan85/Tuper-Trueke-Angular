import { LoadingComponent } from './core/components/loading/loading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from './core/guards/exit.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ExitRegisterGuard} from './core/guards/exit-register.guard';

import { ExampleComponent } from './example/example.component';
import { RequestProductResolver } from './core/resolvers/request-product.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'plate',
    loadChildren: () => import('./pages/plates-list/plates-list.module').then(m => m.PlatesListModule)
    
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule),
    resolve: [RequestProductResolver]
  },
  {
    path: 'create-plates',
    loadChildren: () => import('./pages/plates-create/plates-create.module').then(m => m.PlatesCreateModule),
    canActivate: [AuthGuard],
    canDeactivate: [ExitGuard]
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path:'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path:'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
