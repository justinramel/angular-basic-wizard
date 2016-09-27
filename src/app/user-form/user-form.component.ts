import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user:any;
  @Input() next:any;
  @Input() updateUser:any;

  constructor() { }

  ngOnInit() {
  }

  save = () => {
    this.updateUser(this.user);
    this.next();
  }
}
