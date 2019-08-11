import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from './shared/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // should use some authentication service
  isLoggedIn = false;

  constructor(private router: Router) {
    const isLoggedIn = localStorage.getItem('loggedIN');
    if (!isLoggedIn) {
      localStorage.setItem('loggedIN', 'false');
    } else {
      this.isLoggedIn = JSON.parse(isLoggedIn);
    }
  }

  logOUT = () => {
    localStorage.setItem('loggedIN', 'false');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

}
