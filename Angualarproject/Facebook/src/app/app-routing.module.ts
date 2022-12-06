import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttdirComponent } from './attdir/attdir.component';
import { DatabindingdemoComponent } from './databindingdemo/databindingdemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SimplylearnComponent } from './simplylearn/simplylearn.component';

const routes: Routes = [
  {
    path:'formdemo',component:FormdemoComponent
  },
  {
    path:'pipedemo',component:PipedemoComponent
  },
  {
    path:'attrdemo',component:AttdirComponent
  }
  ,
  {
    path:'dirdemo',component:DirectivedemoComponent
  },
  {
    path:'databind',component:DatabindingdemoComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'service',component:ServicesComponent
  },
  {
    path:'signup',component:RegisterComponent
  },
  {
    path:'signin',component:LoginComponent
  },
  {
    path:'',component:SimplylearnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
