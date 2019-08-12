import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts = [];
  currentEditContactID = this.allContacts.length;
  isEditMode = false;

  newContact = new Contact().deserialize({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  constructor(private appComponent: AppComponent,
              private router: Router) {
    if (!localStorage.getItem('allContacts')) {
      localStorage.setItem('allContacts', '[]');
    }
    this.allContacts = localStorage.getItem('allContacts')
      ? JSON.parse(localStorage.getItem('allContacts'))
      : [];
  }

  ngOnInit() {
    if (!this.appComponent.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }

  resetNewContact = () => {
    this.newContact = new Contact().deserialize({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    });
  };

  validation = () => {
    if (this.newContact.firstName === '') {
      alert('First name can not be empty');
      return false;
    }
    if (this.newContact.lastName === '') {
      alert('Last name can not be empty');
      return false;
    }
    if (!this.newContact.phoneNumber) {
      alert('Phone number can not be empty');
      return false;
    }
    if (this.newContact.email === '') {
      alert('Email can not be empty');
      return false;
    } else if (!(this.newContact.email.includes('@')
      && this.newContact.email.includes('.'))) {
      alert('Invalid email format');
      return false;
    }
    return true;
  };

  addContact = () => {
    if (!this.validation()) {
      return;
    }
    this.allContacts.push(this.newContact);
    this.saveToLocalStorage();
    this.resetNewContact();
  };

  editContact = (index, contact) => {
    this.isEditMode = true;
    this.newContact = JSON.parse(JSON.stringify(contact));
    this.currentEditContactID = index;
  };

  deleteContact = (contactIndex) => {
    if (JSON.stringify(this.allContacts[contactIndex])
      === JSON.stringify(this.newContact)) {
      this.cancelContact();
    }
    this.allContacts.splice(contactIndex, 1);
    this.saveToLocalStorage();
  };

  saveContact = () => {
    if (!this.validation()) {
      return;
    }
    this.isEditMode = false;
    this.allContacts[this.currentEditContactID] = this.newContact;
    this.saveToLocalStorage();
    this.resetNewContact();
  };

  cancelContact = () => {
    this.isEditMode = false;
    this.resetNewContact();
  };

  saveToLocalStorage = () => {
    localStorage.setItem('allContacts', JSON.stringify(this.allContacts));
  }

}
