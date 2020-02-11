import { Component, OnInit, Input } from '@angular/core';
import { CarModel } from './car.model'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  user$: Observable<User>;
  @Input() car: CarModel;
  allow: boolean;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.user$ = this.authService.user$;
    this.user$.subscribe(res => {
      if (res != null) {
        this.allow = true;
      } else{
        this.allow = false;
      }
    });
  }

  ngOnInit(): void {
    console.log(this.car);
  }
  onAlquilar(){
    if (this.allow){
      this.router.navigate(['/rent'], {state: {data: {carname: this.car.carModelName}}});
    } else{
      window.alert("Por favor Inicie sesion");
    }
  }

}
