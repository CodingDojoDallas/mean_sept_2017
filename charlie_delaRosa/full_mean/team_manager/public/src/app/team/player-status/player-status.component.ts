import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[];
  game: number;
  game1: boolean = true;
  game2: boolean = false;
  game3: boolean = false;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  whichGame(game){
    if(game == 1){
      this.game1 = true;
      this.game2 = false;
      this.game3 = false;
      return this.game1;
    }
    if(game == 2){
      this.game1 = false;
      this.game2 = true;
      this.game3 = false;
      return this.game2;
    }
    if(game == 3){
      this.game1 = false;
      this.game2 = false;
      this.game3 = true;
      return this.game3;
    }
  }

  getPlayers() {
    this._playerService.index(players => this.players = players);
  }

}
