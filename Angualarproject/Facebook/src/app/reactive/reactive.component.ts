import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  implements OnInit{
  student:any;

  ngOnInit(): void {
   this.student=new FormGroup({
    firstname:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]*$')
      ])),

      lastname:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z]*$')
        ])),
        age:new FormControl("",Validators.compose(
          [
            Validators.required,
            Validators.min(18),
            Validators.max(60)
          ]))
   }) 

  }

 

  myInfo(student:any){
    console.log(student)
  }
}
