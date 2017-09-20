// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Services
import { CarService } from './car.service';
import { NewsService } from './news.service';
// Components
import { AppComponent } from './app.component';
import { CarNewComponent } from './car-new/car-new.component';
import { CarListComponent } from './car-list/car-list.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarNewComponent,
    CarListComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    CarService,
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
