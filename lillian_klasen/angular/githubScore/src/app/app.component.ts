import { Component, OnInit } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newUser:any = { username: '' };

    user: object = { public_repos:0, followers: 0 }

  constructor(private _scoreService: ScoreService) {
      }

  ngOnInit(){

  }

  getUser(){
      this._scoreService.getUser(
          this.newUser.username, (user) => this.user = user
      );
  }

  submitted: boolean = false;

  submitName(){
      this.submitted = !this.submitted;
  }

}
