import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {

  str="tHANesh is a java FullSTAck tRAIner";
  amount=1234567890;
  mydate= new Date();
  obj={id:100,"name":"Thanesh"};
}
