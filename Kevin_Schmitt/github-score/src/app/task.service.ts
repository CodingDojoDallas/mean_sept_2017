import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  articles:any[] = [];

  constructor(private _http: Http) { }

  
  getSource(source: string){
    this._http.get(`https://developer.github.com/v3/${source}`).subscribe(
      (response) => {
        console.log('res:', response);
      },
      (err) => console.log(err)
    );
  }
}
