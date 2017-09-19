import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  @Input() power: object;

  constructor() { }

  ngOnInit() {
      console.log('in child: ', this.power);
  }

}
