import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newSource = { source: ''};

  githubInfo: object;

  apireq:number;
  class1:string;
  text:string;
  
  // confirm(){
  //   if(this.apireq<20){
  //     this.class1 = 'red';
  //     this.text = 'Needs Work!'
  //   }else if(this.apireq<50){
  //     this.class1 = 'orange';
  //     this.text = 'A Decent Start!'
  //   }else if(this.apireq<100){
  //     this.class1 = 'black';
  //     this.text = 'Doing Good!'
  //   }else if(this.apireq<200){
  //     this.class1 = 'green';
  //     this.text = 'Great Job!'
  //   }else if(this.apireq>=200){
  //     this.class1 = 'blue';
  //     this.text = 'GitHub Elite!'
  //   }
  // }


  constructor(private _newsService: TaskService) { }

  ngOnInit() {
  }

  getSource(){
    this._newsService.getSource(this.newSource.source, (data) => {
      this.githubInfo = data;
      this.apireq = data.public_repos+data.followers
      console.log('button clicked')
      if(this.apireq<20){
        this.class1 = 'red';
        this.text = 'Needs Work!'
      }else if(this.apireq<50){
        this.class1 = 'orange';
        this.text = 'A Decent Start!'
      }else if(this.apireq<100){
        this.class1 = 'black';
        this.text = 'Doing Good!'
      }else if(this.apireq<200){
        this.class1 = 'green';
        this.text = 'Great Job!'
      }else if(this.apireq>=200){
        this.class1 = 'blue';
        this.text = 'GitHub Elite!'
      }
    });
  }

  
}
