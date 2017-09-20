import { CarListComponent } from './car-list/car-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDashboardComponent } from './car-dashboard/car-dashboard.component';
import { CarSingleComponent } from './car-single/car-single.component';

const routes: Routes = [
    {
      path: 'cars',
      component: CarDashboardComponent,
      children: [
        { path: '', component: CarListComponent },
        { path: ':id', component: CarSingleComponent }
      ]
    },
    { path: 'news', component: NewsListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }