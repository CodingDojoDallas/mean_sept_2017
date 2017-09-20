import { CarService } from './../car.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.css']
})
export class CarSingleComponent implements OnInit, OnDestroy {

  car: Car;
  subscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _carService: CarService
  ) {
    this.subscription = this._route.params.subscribe(params => {
      this.car = this._carService.getCarById(parseInt(params.id));
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
