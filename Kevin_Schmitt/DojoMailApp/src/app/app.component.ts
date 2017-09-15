import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any[] = [
    {
      email: 'bill@gates.com',
      importance: 'high',
      subject: 'New Windows',
      content: 'Windows XI Launch'
    },
    {
      email: 'ada@loveland.com',
      importance: 'high',
      subject: 'Programming',
      content: 'Enchantress of Numbers'
    },
    {
      email: 'john@carmac.com',
      importance: 'low',
      subject: 'Updated Algo',
      content: 'New Algorithm Volume'
    },
    {
      email: 'gabe@newel.com',
      importance: 'lowlow',
      subject: 'HL3!',
      content: 'Just Kidding...'
    },
  ]
}
