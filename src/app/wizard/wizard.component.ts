import { Component, OnInit } from '@angular/core';
import User from '../models/user';
import Address from '../models/address';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  step = 1;
  user = new User('Justin', 'Ramel');
  address = new Address('1 Claremont Tower', 'NE1 7RU');

  constructor() { }

  ngOnInit() {
  }

  handleNext = () => {
    this.step++;
  }

  handlePrev = () => {
    this.step--;
  }

  handleReset = () => {
    this.step = 1;
    this.user = new User('', '');
    this.address = new Address('', '');
  }

  handleUpdateUser = (user) => {
    this.user = new User(user.firstName, user.lastName);
  }

  handleUpdateAddress = (address) => {
    this.address = new Address(address.line1, address.postCode);
  }

  getData = () => {
    return {
      user: this.user,
      address: this.address
    }
  }
}
