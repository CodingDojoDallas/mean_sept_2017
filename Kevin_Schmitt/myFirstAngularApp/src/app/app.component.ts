import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  name = 'Kevin';
  birthday = '3/21/1988';
  today = new Date();
  dosomething() {
    return 'This is your function';
  };
  myTimeZone = 0;
  
  mySwitch:boolean = false;

  pstButton():void {
    this.myTimeZone = 1
  };
  cstButton():void {
    this.myTimeZone = 2
  };
  mstButton():void {
    this.myTimeZone = 3
  };
  clearButton():void {
    this.myTimeZone = 0
  };
  activateSwitch():void {
    this.mySwitch = !this.mySwitch;
  };
  buttons = [
    'on','on','on','on','on','on','on','on','on','on'
  ]
  status = true;
  toggleSwitch(idx):void {
    if(this.buttons[idx] = 'on'){
    this.buttons[idx] = 'off'
    } else if (this.buttons[idx]='off') {
      this.buttons[idx] = 'on'
    }
  }
}
