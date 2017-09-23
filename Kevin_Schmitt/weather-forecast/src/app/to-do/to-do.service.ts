import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ToDoService {
  
  constructor(private _http: Http) { }
  
    getSource(source: string, callback){
      this._http.get(`api.openweathermap.org/data/2.5/weather?q=${source}`).subscribe(
        (response) => {
          callback(response.json());
        },
        (err) => console.log(err)
      );
    }
  }
  // api.openweathermap.org/data/2.5/weather?q={city name}