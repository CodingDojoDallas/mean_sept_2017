import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorArray = [];

  loadColor(){
    for(let i = 0; i< 10; i++){
      const numRand = (Math.floor(Math.random() * 6) ) + 1;
      if (numRand === 1){
        this.colorArray.push('red');
      }else if (numRand === 2){
        this.colorArray.push('blue');
      }else if(numRand === 3){
        this.colorArray.push('purple');
      }else if(numRand === 4){
        this.colorArray.push('orange');
      }else if (numRand === 5){
        this.colorArray.push('gold');
      }else if(numRand === 6){
        this.colorArray.push('yellow');
      }else if(numRand === 7){
        this.colorArray.push('black');
      }
    }
  }

  ngOnInit() {
    this.loadColor();
}
}
