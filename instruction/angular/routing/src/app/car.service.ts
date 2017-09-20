import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable()
export class CarService {
  cars: Car[] = [];

  getCars() {
    return this.cars;
  }

  createCar(car: Car) {
    if (this.cars.length === 0) {
      car._id = 1;
    } else {
      car._id = this.cars[this.cars.length - 1]._id + 1;
    }
    this.cars.push(car);
  }

  getCarById(id: number): Car {
    for (const car of this.cars) {
      if (car._id === id) {
        return car;
      }
    }
    return null;
  }

  constructor() { }

}
