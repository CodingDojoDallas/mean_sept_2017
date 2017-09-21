import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GitscoreService {

  constructor(private _http: Http) { }
  retrieveUser(callback, username){
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response)=>{
        callback(response.json());
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
