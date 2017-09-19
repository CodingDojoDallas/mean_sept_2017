// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Services
import { CarService } from './car.service';
import { NewsService } from './news.service';
// Components
import { AppComponent } from './app.component';
import { CarNewComponent } from './car-new/car-new.component';
import { CarListComponent } from './car-list/car-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CarDashboardComponent } from './car-dashboard/car-dashboard.component';
import { CarSingleComponent } from './car-single/car-single.component';

@NgModule({
  declarations: [
    AppComponent,
    CarNewComponent,
    CarListComponent,
    NewsListComponent,
    CarDashboardComponent,
    CarSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    CarService,
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
