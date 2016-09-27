import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @Input() address:any;
  @Input() next:any;
  @Input() prev:any;
  @Input() updateAddress:any;

  constructor() { }

  ngOnInit() {
  }

  save = () => {
    this.updateAddress(this.address);
    this.next();
  }
}
