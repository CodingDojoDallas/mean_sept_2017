import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { LandingComponent } from './landing/landing.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { routing } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    LandingComponent,
    SanjoseComponent,
    SeattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
