import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      password_confirmation:'',
      street:'',
      unit:'',
      city:'',
      state:'',
  }

  checkPassword(){
      if(this.user.password != this.user.password_confirmation){
          return true;
      }
      return false;
  }

  submitted:boolean = false;

  submittedForm(){
      this.submitted = !this.submitted;
  }
}
