import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() data:any;
  @Input() reset:any;
  @Input() prev:any;

  prettyData:any;

  constructor() {
  }

  ngOnInit() {
    this.prettyData = JSON.stringify(this.data, null, 2)
  }

}
