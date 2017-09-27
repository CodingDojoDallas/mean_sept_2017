import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {
  // @Input() players: Player[];
  players: Player[];

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this._playerService.index(players => this.players = players);
  }

  destroyPlayer(id: string, idx: number) {
    this._playerService.destroy(id, res => this.players.splice(idx,1));
  }

}
