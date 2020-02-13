import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {

  constructor() { }
  empName : string;
  show(name) {
    this.empName = name;
  }
  employs = [
    new Employ(1, 'Sarbani', 'Java', 'Programmer', 987890),
    new Employ(2, 'Debjit', 'Angular', 'Programmer', 967480),
    new Employ(3, 'Partha', 'Java', 'Programmer', 823450),
    new Employ(4, 'Surya', 'Angular', 'Programmer', 766780),
    new Employ(5, 'Sanchari', 'Java', 'Programmer', 534560),
  ]

  ngOnInit() {
  }

}
