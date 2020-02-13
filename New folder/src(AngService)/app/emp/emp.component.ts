import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 emps : Observable<Emp[]>;

  constructor(private empService : EmpService) {
    this.emps=empService.showEmploy();
   }

  ngOnInit() {
  }

}
