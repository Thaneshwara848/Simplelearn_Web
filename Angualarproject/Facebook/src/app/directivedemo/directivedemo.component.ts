import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {

  abc:boolean= true;
  xyz:boolean= false;

fruits=["Apple","Banana","Chicko","Dates","Graps","PiApple"];
addfruit(myfruit:any)
{
  console.log(myfruit);
  this.fruits.push(myfruit);
}
}
