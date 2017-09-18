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
  set = 0;
  time = Date.now();
  // time changed by milliseconds (2hrs = 7,200,000 milliseconds)
  PSTtime = this.time - 7200000;
  MSTtime = this.time - 3600000;
  clear = true;

  
  mySwitch:boolean = false;

  pstButton():void {
    this.clear = false;
    this.set = 1; 
    this.time = Date.now();
    this.time = this.PSTtime;
  };
  mstButton():void {
    this.clear = false;
    this.set = 2; 
    this.time = Date.now();
    this.time = this.MSTtime;
  };
  cstButton():void {
    this.clear = false;
    this.set = 3; 
    this.time = Date.now();
  };
  clearButton():void {
    this.set = 0;
    this.clear = true;
  };
  activateSwitch():void {
    this.mySwitch = !this.mySwitch;
  };
  buttons = [
    'on','on','on','on','on','on','on','on','on','on'
  ]
  status = true;
  toggleSwitch(idx):void {
    if(this.buttons[idx] == 'on'){
    this.buttons[idx] = 'off'
    } else if (this.buttons[idx]=='off') {
      this.buttons[idx] = 'on'
    }
  };
  clickForm(){
    console.log('you submitted form!')
  }
  users = [];
  newUser:object = {
    name: '',
    email: '',
    address: '',
    password: '',
    lucky: '',
  };
  resetNewUser(){
    this.newUser = {
      name: '',
      email: '',
      address: '',
      password: '',
      lucky: '',
    };
  };
  submitForm(){
    this.addToDB();
    console.log(this.users);
    this.resetNewUser();
  };
  addToDB(){
    this.users.push(this.newUser);
  };
}
