import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  newTask: Task = new Task();
  errors: string[] = [];

  constructor(
    private _taskService: TaskService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  createTask() {
    // console.log(this.newTask);
    this.errors = [];
    this._taskService.create(
      this.newTask,
      data => {
        // decide if there are errors
        if (data.errors) {
          for (const key of Object.keys(data.errors)) {
            const error = data.errors[key];
            this.errors.push(error.message);
          }
        } else {
          this.newTask = new Task();
          // do the next thing
          this._router.navigateByUrl('/');
        }
      }
    );
  }

}