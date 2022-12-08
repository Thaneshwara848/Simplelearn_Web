import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  products:any=[];
  constructor(private prod:ProdServiceService){}
  ngOnInit(): void {
   
    this.prod.getProduct().subscribe(data=>{

     this.products=data;
     console.log(data)
    },error=>{})
  }

}
