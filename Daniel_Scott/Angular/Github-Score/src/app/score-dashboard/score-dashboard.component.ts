import { Component, OnInit } from '@angular/core';
import { GitscoreService } from './../gitscore.service';

@Component({
  selector: 'app-score-dashboard',
  templateUrl: './score-dashboard.component.html',
  styleUrls: ['./score-dashboard.component.css']
})
export class ScoreDashboardComponent implements OnInit {
  info: object = {};

  username = {user: '' };

  constructor(private _gitScoreService: GitscoreService) {}
  ngOnInit() {
  }
retrieveUser(){
  this._gitScoreService.retrieveUser(
    (data) => {this.info = data
      console.log(this.info)
    },
    this.username.user
  );
  }
}
