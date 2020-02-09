import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car-list/car/car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RentCarComponent } from './rent-car/rent-car.component';
import { HistoryComponent } from './history/history.component';
import {Routes, RouterModule, Router} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'rent', component: RentCarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signIn', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    RentCarComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
