import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {
  emp : Observable<Emp>;
  empno : number;

  show(){
    this.emp=this.empService.searchEmploy(this.empno);
  }
  constructor(private empService : EmpService) {
    
   }

  ngOnInit() {
  }

}
