import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this._taskService.index(tasks => this.tasks = tasks);
  }

  destroyTask(id: string, idx: number) {
    this._taskService.destroy(id, res => this.tasks.splice(idx, 1));
  }

}