import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  getSource(source: string, callback){
    this._http.get(`https://api.github.com/users/${source}`).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => console.log(err)
    );
  }
}
