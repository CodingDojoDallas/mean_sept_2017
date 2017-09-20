import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [];
  user = {
    firstName: '',
    lastName: ''
  };
 onSubmit(){
   this.users.push(this.user);
   this.user = {firstName: '',
   lastName: ''}
 }
}
