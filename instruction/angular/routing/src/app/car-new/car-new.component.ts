import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  newCar: Car = new Car();

  constructor(private _carService: CarService) { }

  ngOnInit() {
  }

  createCar() {
    this._carService.createCar(this.newCar);
    // reset the new car
    this.newCar = new Car();
  }

}
