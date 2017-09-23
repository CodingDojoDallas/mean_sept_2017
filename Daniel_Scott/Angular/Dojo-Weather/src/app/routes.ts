import { LandingComponent } from './landing/landing.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent} from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'dallas',
    component: DallasComponent,
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'sanjose',
    component: SanjoseComponent
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'dc',
    component: DcComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  }
];
export const routing = RouterModule.forRoot(routes);
