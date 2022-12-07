import { Component } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-seetha',
  templateUrl: './seetha.component.html',
  styleUrls: ['./seetha.component.css']
})
export class SeethaComponent {
  constructor(private db:CharservService){}
  msg:any=[];
  send(mytext:any){

    this.msg= this.db.chat(mytext);
  }
}
