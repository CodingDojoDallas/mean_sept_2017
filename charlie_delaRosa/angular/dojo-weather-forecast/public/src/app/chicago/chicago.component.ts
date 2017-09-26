import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  clouds;
  city = 'chicago'

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather(this.city).then(weather => {
  		this.humidity = weather.main.humidity;
  		this.temp = weather.main.temp;
  		this.temp = Math.floor(this.temp * (9/5) - 459.67);
  		this.maxTemp = Math.floor((weather.main.temp_max) * (9/5) - 459.67);
  		this.minTemp = Math.floor((weather.main.temp_min) * (9/5) - 459.67);
  		this.clouds = weather.weather[0].description;
  	})
  }
}
