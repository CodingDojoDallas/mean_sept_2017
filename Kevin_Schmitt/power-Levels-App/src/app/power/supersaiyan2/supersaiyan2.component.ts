import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan2',
  templateUrl: './supersaiyan2.component.html',
  styleUrls: ['./supersaiyan2.component.css']
})
export class Supersaiyan2Component implements OnInit {
  @Input() mySuperSaiyan2;
  constructor() { }

  ngOnInit() {
  }

}
