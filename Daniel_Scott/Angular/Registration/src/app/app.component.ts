import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Registration';
  user = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confrim: '',
  street: '',
  apartment: "",
  state: '',
  city: '',
  radio: undefined
}

succeeded: boolean = false;

constructor(){}
onSubmit(){
this.succeeded = true;
  }
}
