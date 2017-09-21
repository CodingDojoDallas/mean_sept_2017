import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { ScoreDashboardComponent } from './score-dashboard/score-dashboard.component';
import { GitscoreService}from './gitscore.service'
@NgModule({
  declarations: [
    AppComponent,
    ScoreDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
