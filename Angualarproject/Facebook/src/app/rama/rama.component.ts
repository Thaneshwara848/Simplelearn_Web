import { Component } from '@angular/core';
import { CharservService } from '../charserv.service';

@Component({
  selector: 'app-rama',
  templateUrl: './rama.component.html',
  styleUrls: ['./rama.component.css']
})
export class RamaComponent {
 constructor(private db:CharservService){} 
 msg:any=[];
 send(mytext:any){

   this.msg= this.db.chat(mytext);
 }
}
