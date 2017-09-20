import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newSource = { source: ''};


  



  constructor(private _newsService: TaskService) { }

  ngOnInit() {
  }
  getSource(){
    this._newsService.getSource(this.newSource.source);
    console.log('the submit button works', this.newSource.source)
    this.newSource = {
      source: ''
    };
  }

}
