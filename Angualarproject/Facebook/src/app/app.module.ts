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
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { TempletdrivenComponent } from './templetdriven/templetdriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { RamaComponent } from './rama/rama.component';
import { RavanaComponent } from './ravana/ravana.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { SeethaComponent } from './seetha/seetha.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { HttpClientModule } from '@angular/common/http';


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
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    FormdemoComponent,
    TempletdrivenComponent,
    ReactiveComponent,
    ServicedemoComponent,
    A1Component,
    A2Component,
    A3Component,
    RamaComponent,
    RavanaComponent,
    ChatappComponent,
    SeethaComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
