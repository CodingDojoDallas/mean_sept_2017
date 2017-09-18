import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component - Events';
  myName = 'Cody';

  users: object[] = [];

  newUser: object = {
    name: '',
    email: ''
  };

  clickedButton() {
    console.log('You clicked a button');
  }

  addUserToDB() {
    this.users.push(this.newUser);
  }

  resetNewUser() {
    this.newUser = {
      name: '',
      email: ''
    };
  }

  submitForm() {
    this.addUserToDB();
    this.resetNewUser();
  }
}
