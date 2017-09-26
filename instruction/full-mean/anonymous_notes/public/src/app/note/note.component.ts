import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Note[];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    // this.getNotes();
  }

  getNotes() {
    console.log('get notes function');
    this._noteService.index(notes => this.notes = notes);
  }

}
