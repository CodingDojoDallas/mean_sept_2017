import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PlayerNewComponent } from './team/player-new/player-new.component';
import { PlayerStatusComponent } from './team/player-status/player-status.component';
import { PlayerListComponent } from './team/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerNewComponent,
    PlayerStatusComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
