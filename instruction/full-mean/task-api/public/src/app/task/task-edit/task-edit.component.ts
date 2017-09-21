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

  constructor(
    private _route: ActivatedRoute,
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
    this._taskService.update(this.task, res => console.log(res));
  }

}
