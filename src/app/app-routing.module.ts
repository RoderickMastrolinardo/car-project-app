import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';
import { HistoryComponent } from './history/history.component';
import { RentCarComponent } from './rent-car/rent-car.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: '', component: CarListComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'rent', component: RentCarComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'signIn', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}