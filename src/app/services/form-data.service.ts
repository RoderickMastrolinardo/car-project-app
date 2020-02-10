import { Injectable, EventEmitter } from '@angular/core';
import { CarModel } from '../car-list/car/car.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  carSelected = new EventEmitter<CarModel>();

  constructor() { }
}
