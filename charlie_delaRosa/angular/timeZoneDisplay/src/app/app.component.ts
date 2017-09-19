import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'US Time Zone Display';
  // time = Date.now();
  time = new Date();
  lastTimeZoneSelected = null;
  showDate = true;

  getDateByZone(timezone) {
    this.showDate=true;
    this.time = new Date();
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 1);
    }
    this.lastTimeZoneSelected = timezone;
  }

  showDateFalse(){
    this.showDate = false;
    this.lastTimeZoneSelected = null;
  }
}
