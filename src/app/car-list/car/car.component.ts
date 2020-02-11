import { Component, OnInit, Input } from '@angular/core';
import { CarModel } from './car.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: CarModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.car);
  }
  onAlquilar(){
    this.router.navigate(['/rent'], {state: {data: {carname: this.car.carModelName}}});
  }

}
