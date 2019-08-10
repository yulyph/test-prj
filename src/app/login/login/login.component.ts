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
    this.appComponent.loggedIN = false;
  }

  getLogedIn = () => {
    if (this.username === 'admin' && this.password === 'admin') {
      this.appComponent.loggedIN = true;
      this.router.navigate(['contacts']);
    } else {
      this.appComponent.loggedIN = false;
      alert('Invalid username or password');
    }
  };

  pressedKey = (event) => {
    if (event.key === 'Enter') {
      this.getLogedIn();
    }
  }

}
