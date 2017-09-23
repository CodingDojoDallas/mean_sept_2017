import { TaskService } from './../task.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Task } from '../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  task: Task = new Task();
  goodtogo = false;
  errors: string[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTask();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doSomething() {
    console.log('you clicked a label');
  }

  getTask() {
    this.subscription = this._route.params.subscribe(
      params => this._taskService.show(params.id, res => this.task = res)
    );
  }

  updateTask() {
    // console.log(this.task);
    this.goodtogo = true;
    this.errors = []
    this._taskService.update(this.task, res => {
      console.log(res);
      if(res.errors){
        for(const key of Object.keys(res.errors)){
          const error = res.errors[key];
          this.errors.push(error.message);
        }
      }else {
        this.task = new Task();
        // do the next thing
        this._router.navigateByUrl('/');
      }
    });
  }
  
  // confirm(){
  //   this.goodtogo = true;
  // }

}