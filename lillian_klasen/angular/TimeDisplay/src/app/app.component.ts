import { Component } from '@angular/core';
import moment from "moment-timezone";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time: any = Date.now()

  color:boolean = true;

  changeColor() {
      this.color = !this.color;
  }

  pacific_time(){
      this.time = moment.tz('America/Los_Angeles').format('LLLL');
  }

  mountain_time(){
      this.time = moment.tz('America/Denver').format('LLLL');
  }

  eastern_time(){
      this.time = moment.tz('America/New_York').format('LLLL');
  }

  central_time(){
      this.time = moment.tz('America/Chicago').format('LLLL');
  }

  clear() {
      this.time = "";
  };
}
