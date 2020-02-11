import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, public db: AngularFireDatabase, private router: Router) { 
    this.user$ = this.afAuth.authState;
  }

  SignUp(userModel) {
    this.afAuth.auth.createUserWithEmailAndPassword(userModel.correo, userModel.password)
      .then((result) => {
        let user = this.afAuth.auth.currentUser;
        user.updateProfile({
          displayName: userModel.nombre +" "+ userModel.apellido
        });
        // this.db.database.ref('users/' + user.uid).push({nombre: userModel.nombre , apellido: userModel.apellido});
        console.log(result.user)
      }).then((result) => {
        window.alert("You have been successfully registered!");
        this.router.navigate(['/']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    })
  }
}
