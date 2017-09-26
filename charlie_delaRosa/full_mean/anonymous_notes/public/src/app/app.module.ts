import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteNewComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
