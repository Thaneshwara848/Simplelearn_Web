import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { HomeComponent } from './loan/home/home.component';
import { CarComponent } from './loan/car/car.component';
import { PersonalComponent } from './loan/personal/personal.component';
import { ServicesComponent } from './services/services.component';
import { DepartmentComponent } from './department/department.component';
import { SimplylearnComponent } from './simplylearn/simplylearn.component';
import { DatabindingdemoComponent } from './databindingdemo/databindingdemo.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { AttdirComponent } from './attdir/attdir.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoanComponent,
    EduComponent,
    HomeComponent,
    CarComponent,
    PersonalComponent,
    ServicesComponent,
    DepartmentComponent,
    SimplylearnComponent,
    DatabindingdemoComponent,
    DirectivedemoComponent,
    AttdirComponent,
    PipedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
