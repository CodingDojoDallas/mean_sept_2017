import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { CalculateComponent } from './power/calculate/calculate.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { Supersaiyan2Component } from './power/supersaiyan2/supersaiyan2.component';
import { Supersaiyan3Component } from './power/supersaiyan3/supersaiyan3.component';
import { Supersaiyan4Component } from './power/supersaiyan4/supersaiyan4.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    CalculateComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    Supersaiyan2Component,
    Supersaiyan3Component,
    Supersaiyan4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
