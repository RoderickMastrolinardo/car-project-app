import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<User>;
  displayName: string;

  constructor(private authService: AuthenticationService) { 
    this.user$ = this.authService.user$;
    this.user$.subscribe(res => {
      if (res != null){
        this.displayName = res.displayName;
      }
   });
  }
  ngOnInit(): void { }

  signOut(){
    this.authService.SignOut();
  }
}
