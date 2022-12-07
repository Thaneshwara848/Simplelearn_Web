import { Component } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-ravana',
  templateUrl: './ravana.component.html',
  styleUrls: ['./ravana.component.css']
})
export class RavanaComponent {
  constructor(private db:CharservService){}
  msg:any=[];
  send(mytext:any){

    this.msg= this.db.chat(mytext);
  }
}
