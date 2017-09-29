import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  newPlayer: Player = new Player();
  errors: string[] = [];
  @Output() createPlayerEvent = new EventEmitter();

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
  }

  createPlayer() {
    console.log(this.newPlayer);
    this.errors = [];
    this._playerService.create(
      this.newPlayer,
      player => {
        if(player.errors) {
          for(const key of Object.keys(player.errors)) {
            const error = player.errors[key];
            this.errors.push(error.message);
          }
        } else {
          this.newPlayer = new Player();
          this.createPlayerEvent.emit();
        }
      }
    );
  }

}
