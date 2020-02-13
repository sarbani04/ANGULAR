import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name : string
  age : number
  college : string
  student : string 
  constructor() { 
    this.name = "Sarbani"
    this.age = 22
    this.college = "NIT"
    this.student = localStorage.getItem("MLP173");
  }

  ngOnInit() {
  }

}
