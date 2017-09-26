import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  createUser(newUser: User, callback) {
    this._http.post('/users', newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  authenticate(user: User, callback) {
    this._http.post('/login', user).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
