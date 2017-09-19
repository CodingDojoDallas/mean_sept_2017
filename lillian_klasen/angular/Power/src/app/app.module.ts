import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './power/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './power/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './power/supersaiyanfour/supersaiyanfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
