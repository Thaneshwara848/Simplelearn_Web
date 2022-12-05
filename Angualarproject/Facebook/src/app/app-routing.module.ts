import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingdemoComponent } from './databindingdemo/databindingdemo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SimplylearnComponent } from './simplylearn/simplylearn.component';

const routes: Routes = [
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
