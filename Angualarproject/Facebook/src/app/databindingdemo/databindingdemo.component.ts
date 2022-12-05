import { Component } from '@angular/core';

@Component({
  selector: 'app-databindingdemo',
  templateUrl: './databindingdemo.component.html',
  styleUrls: ['./databindingdemo.component.css']
})
export class DatabindingdemoComponent {


  company = "IBM ";

  myimg="../../assets/Nat1.jpg";
  abc(){
    console.log("HI Abc Function ...!")
  }
  
}
