import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms App';
  users = [];
  user = new User();

  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }
}
