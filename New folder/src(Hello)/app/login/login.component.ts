import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router) { }
  userName : string;
  password : string;
  validateMe(){
    localStorage.setItem("MLP173","Sarbani");
    if(this.userName=="hexaware" && this.password=="hexaware") {
      alert("Correct");
      this._router.navigate(['/menu']);
    } else {
      alert("Invalid")
    }
  }

  ngOnInit() {
  }

}
