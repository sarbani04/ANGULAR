import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {

  constructor() { }
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
