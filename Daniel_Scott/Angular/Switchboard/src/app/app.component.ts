import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleSwitches = [true, true, true, true, true, true, true, true, true, true];

  toggle(idx){
    this.toggleSwitches[idx] = !this.toggleSwitches[idx];
  }
}
