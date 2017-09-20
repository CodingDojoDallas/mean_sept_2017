import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerlev:number = 0;
  humanPower = 0;
  saiyanPower = 0;
  supersaiyanPower = 0;
  supersaiyanPower2 = 0;
  supersaiyanPower3 = 0;
  supersaiyanPower4 = 0;
  allofthem(){
    this.humanPower = this.powerlev*1;
    this.saiyanPower = this.powerlev*10;
    this.supersaiyanPower = this.powerlev*90;
    this.supersaiyanPower2 = this.powerlev*150;
    this.supersaiyanPower3 = this.powerlev*250;
    this.supersaiyanPower4 = this.powerlev*500;
  }
  constructor() { }

  ngOnInit() {
  }

}
