import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() power;
  constructor() { }
  
  ngOnChanges(){
    this.power = this.power * 90;
  }

  ngOnInit() {
  }
}
