import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Observable<any[]>

  constructor(public db: AngularFireDatabase) {
    this.cars = db.list('/Carros').valueChanges();
    console.log(this.cars);
  }

  ngOnInit(): void {
  }

}
