import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class TaskService {
tasks = [];
  constructor(private _http: Http) { }

  retrieveTasks(callback){
    this._http.get('http://59c28cf988c2c400118df042.mockapi.io/tasks/tasks').subscribe(
      (response)=> {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  createTask(task){
    this.tasks.push(task);
  }

}
