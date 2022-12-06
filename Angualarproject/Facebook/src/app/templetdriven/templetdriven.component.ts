import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-templetdriven',
  templateUrl: './templetdriven.component.html',
  styleUrls: ['./templetdriven.component.css']
})
export class TempletdrivenComponent {

  myemp(userForm:any){
    console.log(userForm);
  }
}

