import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
  @Input() power: object;

  constructor() { }

  ngOnInit() {
  }

}
