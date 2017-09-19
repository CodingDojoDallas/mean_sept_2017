import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  true = 'High';
  false = 'Low';

  info = [
      {
          email: 'Lillian.Klasen@gmail.com',
          importance: true,
          subject: 'new windows',
          content: 'windows XI will launch in year 2100'
      },
      {
          email: 'mcaruso1616@gmail.com',
          importance: true,
          subject: 'programming',
          content: 'enchantress of numbers'
      },
      {
          email: 'mkessler@dumb.com',
          importance: false,
          subject: 'updated algo',
          content: 'new algorithm for shadow volumes'
      },
      {
          email: 'klasenklasen@klasen.com',
          importance: false,
          subject: 'HL3!',
          content: 'just kidding...'
      }
  ];
}
