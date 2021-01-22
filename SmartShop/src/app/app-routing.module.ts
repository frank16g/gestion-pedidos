import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
