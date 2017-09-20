import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    buttons = [true, true, true, true, true, true, true];

    switch:boolean = true;

    changeStatus():void {
        this.switch = !this.switch;
        }
    }
