import { RentService } from './../services/rent.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss']
})
export class RentCarComponent implements OnInit {
  user$: Observable<User>;
  carName: {carname: string};
  nombre: string;
  correo: string;

  constructor( private authService: AuthenticationService, public rentService: RentService) {
    this.user$ = this.authService.user$;
    this.user$.subscribe(res => {
      if (res != null){
        this.nombre = res.displayName;
        this.correo = res.email;
      }
   });
   }

  rentForm: FormGroup; 

  ngOnInit(): void {

    this.rentForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'vehiculo': new FormControl(null, Validators.required),
      'reciboVehiculo': new FormControl(null, Validators.required),
      'entregaVehiculo': new FormControl(null, Validators.required)
    });

    this.carName = history.state.data;
  }
  onSubmit(){
    if (this.rentForm.get('reciboVehiculo').valid && this.rentForm.get('entregaVehiculo').valid){
      this.rentService.rentCar(this.rentForm.value);
    }
    else{
      window.alert("Por favor complete el formulario");
    }
  }

}
