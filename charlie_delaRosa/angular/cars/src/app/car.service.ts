import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable()
export class CarService {
  cars: Car[] = [];

  getCars() {
    return this.cars;
  }

  createCar(car: Car) {
    this.cars.push(car);
  }
  
  constructor() { }

}
