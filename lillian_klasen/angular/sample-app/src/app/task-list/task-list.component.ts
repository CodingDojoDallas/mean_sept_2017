import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];

  constructor(private _taskService: TaskService) {
      this.getTasks();
  }

  getTasks() {
      this._taskService.retrieveTasks((tasks) => {
          this.tasks = tasks;
      })
  }

  ngOnInit() {
  }

}
