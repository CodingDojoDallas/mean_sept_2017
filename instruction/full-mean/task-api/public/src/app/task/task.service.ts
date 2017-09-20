import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  index(callback) {
    this._http.get('/tasks').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(newTask: Task, callback) {
    this._http.post('/tasks', newTask).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  show(id: string, callback) {
    this._http.get(`tasks/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  update(newTask: Task, callback) {
    this._http.put(`tasks/${newTask._id}`, newTask).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  destroy(id: string, callback) {
    this._http.delete(`tasks/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
