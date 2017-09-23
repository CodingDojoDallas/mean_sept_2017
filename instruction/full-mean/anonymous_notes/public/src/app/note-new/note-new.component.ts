import { NoteService } from './../note.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  newNote: Note = new Note();
  errors: string[] = [];
  @Output() createNoteEvent = new EventEmitter();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  createNote() {
    this.errors = [];
    this._noteService.create(
      this.newNote,
      note => {
        if (note.errors) {
          for (const key of Object.keys(note.errors)) {
            const error = note.errors[key];
            this.errors.push(error.message);
          }
        } else {
          this.newNote = new Note();
          this.createNoteEvent.emit();
        }
      }
    );
  }

}
