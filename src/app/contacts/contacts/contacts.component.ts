import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private appComponent: AppComponent,
              private router: Router) { }

  ngOnInit() {
    if (!this.appComponent.loggedIN) {
      this.router.navigate(['login']);
    }
  }

}
