import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: LandingComponent,
    children: [],
  },
  {
    path: 'home',
    pathMatch:'full',
    component: HomeComponent,
    children: [],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
