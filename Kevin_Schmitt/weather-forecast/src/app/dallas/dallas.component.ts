import { CITIES } from './../cities';
import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cities: City[] = CITIES;

  // newCity: City = new City();

  constructor() { }

  ngOnInit() {
  }

}
