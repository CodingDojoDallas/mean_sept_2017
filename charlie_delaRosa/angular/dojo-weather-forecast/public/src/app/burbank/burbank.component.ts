import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  clouds;
  city = 'burbank'

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
