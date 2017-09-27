import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  index(callback) {
    this._http.get('/players').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(newPlayer: Player, callback) {
    this._http.post('/players', newPlayer).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  // destroy(newPlayer: Player, callback) {
  //   this._http.delete(`/players/${newPlayer._id}`).subscribe(
  //     res => callback(res.json()),
  //     err => console.log(err)
  //   );
  // }
  destroy(id: string, callback) {
    this._http.delete(`/players/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
