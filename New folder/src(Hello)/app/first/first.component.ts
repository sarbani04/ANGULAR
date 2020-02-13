import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  company : string;
  student : string;
  constructor() {
    this.company="Hexaware";
    this.student = localStorage.getItem("MLP173");
   }

  ngOnInit() {
  }

}
