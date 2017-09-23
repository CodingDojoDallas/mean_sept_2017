import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent} from './home/home.component';
import { PageUnknownComponent} from './page-unknown/page-unknown.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  component: LandingComponent,
  children: []
},
{
path: 'home/test',
pathMatch: 'full',
component: HomeComponent,
children: []
},
{
path: '**',
pathMatch: 'full',
component: PageUnknownComponent,
children: []
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
