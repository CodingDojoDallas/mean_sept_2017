import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';

const routes: Routes = [
    {
        path: '',
        component: TaskComponent,
        children: [
            { path: '', component: TaskListComponent },
            { path: 'tasks/new', component: TaskNewComponent },
            { path: 'tasks/:id/edit', component: TaskEditComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
