import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  timeZone = null;

  getZone(timezone){
    this.date = new Date();
    if (timezone === 'MST'){
      this.date.setHours(this.date.getHours() + 1);
    }else if(timezone === 'CST'){
      this.date.setHours(this.date.getHours() + 2);
    }else if (timezone === 'EST'){
      this.date.setHours(this.date.getHours() + 3);
    }
    this.timeZone = timezone;
  }
}
