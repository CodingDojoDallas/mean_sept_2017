import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {
  users: any[] = [];

  constructor(private _http: Http) { }

  getUser(username:string, callback: Function) {
      this._http.get(`https://api.github.com/users/${username}`).subscribe((response) => {
        this.users = response.json();
        callback(this.users);
    },
    (err) => console.log(err)
    );
  }
}
