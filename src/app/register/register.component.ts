import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service'
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  user: UserModel = {
    nombre:"",
    correo:"",
    apellido:"",
    password:""
  };
  constructor(private formBuilder: FormBuilder, public authenticationService: AuthenticationService) {

  }

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      passwords: this.formBuilder.group({
        'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
        'confirmpassword': new FormControl("", [Validators.required, Validators.minLength(8)])
      }, {validator: this.equalPassword})
    });
  }

  onSubmit(){
    console.log(this.registerForm.value);
    console.log(this.user);
    this.user.nombre = this.registerForm.get('nombre').value;
    this.user.apellido = this.registerForm.get('apellido').value;
    this.user.correo = this.registerForm.get('correo').value;
    this.user.password =this.registerForm.controls['passwords'].get('password').value;
    this.authenticationService.SignUp(this.user);
    this.registerForm.reset();
  }
  equalPassword(control: AbstractControl): { invalid: boolean } {
    if (control.get('password').value !== control.get('confirmpassword').value) {
        return {invalid: true};
    }
  }
}
