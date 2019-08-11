import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private appComponent: AppComponent,
              private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
    if (this.appComponent.isLoggedIn) {
      this.router.navigate(['contacts']);
    }
  }

  getLogedIn = () => {
    if (this.username === 'admin' && this.password === 'admin') {
      this.appComponent.isLoggedIn = true;
      localStorage.setItem('loggedIN', 'true');
      this.router.navigate(['contacts']);
    } else {
      alert('Invalid username or password');
    }
  };

  pressedKey = (event) => {
    if (event.key === 'Enter') {
      this.getLogedIn();
    }
  }

}
