import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city:string){
  	console.log(city);
	  return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid={{APIKey}}`).map(data => data.json()).toPromise();
  }
}
