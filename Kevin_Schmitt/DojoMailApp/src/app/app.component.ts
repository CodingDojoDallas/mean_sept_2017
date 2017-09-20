import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// implements OnInit
export class AppComponent  {
  // ngOnInit(arr){
  //   console.log('executes this code when the component is generated');
  //   for (let i = arr.length; i; i--) {
  //       let j = Math.floor(Math.random() * i);
  //       [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  //   }
  //   //shuffle the array
  //   this.ngOnInit(this.colors)
  // }
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
  ];
  colors:string[] = [
    '#56c6a0', '#0b00c8', '#519395', '#82b382', '#6cfe1c'
  ];
  num:number = Math.floor(Math.random() * this.colors.length)
  Math = Math
}
