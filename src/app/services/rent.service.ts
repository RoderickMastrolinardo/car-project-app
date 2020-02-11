import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, public db: AngularFireDatabase,  private router: Router, private authService: AuthenticationService) {
    this.user$ = this.authService.user$;
   }

  rentCar(rentForm){
    if (this.user$) {
      let user = this.afAuth.auth.currentUser;
      this.db.database.ref('rent/').push({uid: user.uid, nombre: rentForm.nombre, correo: rentForm.correo, vehiculo: rentForm.vehiculo, fechaRecibo: rentForm.reciboVehiculo, fechaEntrega: rentForm.entregaVehiculo }).then((result) => {
        window.alert("ha Alquilado con exito!");
        this.router.navigate(['/']);
      });
    } else{
      window.alert('no esta autenticado!');
      this.router.navigate(['/']);
    }
  }
}
