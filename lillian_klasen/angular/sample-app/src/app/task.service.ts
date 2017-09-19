import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TaskService {
  tasks = [];

  constructor(private _http: Http) { }

  retrieveTasks(callback){
      this._http.get('http://localhost.com/27017/tasks').subscribe(
          (response) => {
              this.tasks = response.json();
              callback(this.tasks);
          },
          (err) => {
              console.log(err);
          }
      );
    }
}
