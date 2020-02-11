import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthenticationService } from '../services/authentication.service';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { myCarsModel } from './myCars.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  user$: Observable<User>;
  uid: string;
  myCars$;

  Cars: myCarsModel = {
    vehiculo: "",
    fechaEntrega: "",
    fechaRecibo: "",
    nombre: "",
    uid: ""
  };
  
  constructor(public db: AngularFireDatabase, private authService: AuthenticationService) { 
    this.user$ = this.authService.user$;
    this.user$.subscribe(res => {
      if (res != null){
        this.uid = res.uid;
      }
    });
  //   this.myCars$ = this.db.database.ref('/rent').orderByChild('uid/' + this.uid).on('value', (snapshot) => {
  //     snapshot.forEach((child) => {

  //       console.log( child.val());
  //       //return child.val();
  //       // this.intVal.push(child.val());
  //       // console.log("intVal",this.intVal);
  //     });
  //   });
  //   console.log(this.myCars$);
  // }
  //     console.log(snapshot.val());
  //   }, function (error) {
  //     console.log("Error: " + error.code);
  //   });
  //   console.log(this.Cars);
  }
  ngOnInit(): void {
    this.myCars$ = this.db.list('rent', ref => ref.orderByChild('uid/' + this.uid)).snapshotChanges().pipe(
      map(changes => changes.map(change => ({
        key: change.payload.key,
        value: change.payload.val()
      })))
      );
    console.log(this.myCars$);
  }
}

