import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = ['AliceBlue', 'Aqua', 'CornflowerBlue', 'Blue', 'Aquamarine', 'Cyan', 'DarkBlue', 'DarkSeaGreen', 'DarkTurquoise'];

 shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;

     while (0 !== currentIndex){
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }
    return array;
  } ;

  ngOnInit(){
        return this.shuffle(this.colors);

  }
}
