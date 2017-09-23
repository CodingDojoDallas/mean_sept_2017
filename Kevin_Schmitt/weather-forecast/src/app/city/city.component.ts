import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../to-do/to-do.service';
import { City } from '../city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City = new City();

  newSource = { source: ''};
  
  githubInfo: object;

  apireq:number;
  class1:string;
  text:string;





  constructor(private _route: ActivatedRoute, private _todoService: ToDoService) { 

  }

  ngOnInit() {
    console.log('init');
    this._route.params.subscribe(params => {
      console.log(params.city)
      // use the API through the service to update the value of this.city
    });
  }
  getSource(){
    this._todoService.getSource(this.newSource.source, (data) => {
      this.githubInfo = data;
      this.apireq = data.public_repos+data.followers
    });
  }

}
