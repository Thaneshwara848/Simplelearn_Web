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

switcsdemo=10;
lang(num:any)
{
  this.switcsdemo=num;
}
people: any[] = [
  {
    "name": "Douglas  Pace",
    "AGE":25
  },
  {
    "name": "Mcleod  Mueller",
    "AGE":45
  },
  {
    "name": "Day  Meyers",
    "AGE":55
  },
  {
    "name": "Aguirre  Ellis",
    "AGE":78
  },
  {
    "name": "Cook  Tyson",
    "AGE":25
  }
];
}
