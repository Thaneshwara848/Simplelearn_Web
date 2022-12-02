import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BankComponent } from './bank/bank.component';
import { EduComponent } from './bank/edu/edu.component';
import { CarComponent } from './bank/car/car.component';
import { HomeComponent } from './bank/home/home.component';
import { PersonalComponent } from './bank/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BankComponent,
    EduComponent,
    CarComponent,
    HomeComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
