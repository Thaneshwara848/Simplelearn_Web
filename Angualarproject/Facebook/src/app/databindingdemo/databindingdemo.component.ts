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

  count=0;
  increment()
  {
    this.count++;
    console.log(this.count)
  }
  decrement()
  {
    this.count--;
    console.log(this.count)
  }
  myname(name:string){
    console.log("Hi Mr !"+name)
  }

  total=0;
  emi=0;
  caculate(pri:any,time:any, roi:any){
    // console.log(pri);
    // console.log(time);
    // console.log(roi);

    this.total = (pri *  time  * roi)/100; 
    this.emi=this.total/time;
  }
}


