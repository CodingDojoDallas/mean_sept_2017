import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Retro Barcode Generator';
  colors = [];

  fillImageArray(){
  for(var i = 0; i < 10; i++){
    const randNum = Math.floor(Math.random() * 10) + 1;
    if(randNum === 1){
      this.colors.push('AliceBlue')
    } else if(randNum === 2){
      this.colors.push('AntiqueWhite')
    }
    else if(randNum === 3){
      this.colors.push('Aqua')
    }
    else if(randNum === 4){
      this.colors.push('Aquamarine')
    }
    else if(randNum === 5){
      this.colors.push('Azure')
    }
    else if(randNum === 6){
      this.colors.push('Beige')
    }
    else if(randNum === 7){
      this.colors.push('Bisque')
    }
    else if(randNum === 8){
      this.colors.push('Gray')
    }
    else if(randNum === 9){
      this.colors.push('BurlyWood')
    }
    else if(randNum === 10){
      this.colors.push('CornflowerBlue')
    }
  }
}

  ngOnInit() {
    this.fillImageArray();
  }
}
