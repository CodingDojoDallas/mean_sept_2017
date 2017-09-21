import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dallas'
  },
  {
    path: ':city',
    component: CityComponent,
    children: [],
  },
  {
    path: 'dallas',
    component: DallasComponent,
    children: [],
  },
  {
    path: 'burbank',
    component: BurbankComponent,
    children: [],
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: [],
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanJoseComponent,
    children: [],
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: [],
  },
  {
    path: 'washington',
    component: WashingtonComponent,
    children: [],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
