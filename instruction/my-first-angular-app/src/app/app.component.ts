import { Component } from '@angular/core';

@Component({
  selector: 'app-cody-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  name = 'Cody';

  current_user:object = {
    'name': 'Cody',
    'email': 'cody@cody.com',
  };

  users:object[] = [
    { 'name': 'Jeff' },
    { 'name': 'Bob' }
  ];

  myDefaultStyle:object = {
    'background': 'green'
  };

  mySwitch = false;

  activateSwitch():void {
    this.mySwitch = !this.mySwitch;
  }

  doSomething() {
    return 'hello';
  }
}
