import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // should use some authentication service
  public loggedIN = false;
  constructor(private router: Router) {}
  logOUT = () => {
    this.loggedIN = false;
    this.router.navigate(['login']);
  }
}
