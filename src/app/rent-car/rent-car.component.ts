import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss']
})
export class RentCarComponent implements OnInit {
  nameIsReadonly: boolean = false;
  apellidoIsReadonly: boolean = false;
  correoIsReadonly: boolean = false;
  carName: {carname: string};

  constructor() { }

  rentForm: FormGroup; 

  ngOnInit(): void {

    this.rentForm = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'vehiculo': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      'recibo-vehiculo': new FormControl(null, Validators.required),
      'entrega-vehiculo': new FormControl(null, Validators.required)
    });

    this.carName = history.state.data;
    console.log(this.carName);
  }
  onSubmit(){
    console.log(this.rentForm);
  }

}
