import { TeamComponent } from './team/team.component';
import { PlayerListComponent } from './team/player-list/player-list.component';
import { PlayerNewComponent } from './team/player-new/player-new.component';
import { PlayerStatusComponent } from './team/player-status/player-status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PlayerListComponent },
  // { path: 'list', pathMatch: 'full', component: PlayerListComponent },
  { path: 'new', pathMatch: 'full', component: PlayerNewComponent },
  { path: 'status', pathMatch: 'full', component: PlayerStatusComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
