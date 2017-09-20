import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  users: object[] = []

  states = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
    'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
    'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
    'VA','WA','WV','WI','WY']

  newUser:object = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    address: '',
    aptUnit: '',
    city: '',
    state: '',
  }

  addUserToDB(){
    this.users.push(this.newUser)
  }

  resetNewUser(){
    this.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      address: '',
      aptUnit: '',
      city: '',
      state: '',
    }
  }

  submitForm(){
    this.addUserToDB()
    this.resetNewUser()
  }

}
