import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private  db:CommonservService){
  }


  dblogic(){
    // console.log("H1 DB COmmon Logic with 100 lines of code ")
    this.db.mycommondblogic();
  }
}
