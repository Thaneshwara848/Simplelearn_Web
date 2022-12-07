import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
  constructor(private db:CommonservService){

  }
  dblogic(){
    //console.log("Hi DB Loginc with 100 lines of code ")
    this.db.mycommondblogic();
  }
}
