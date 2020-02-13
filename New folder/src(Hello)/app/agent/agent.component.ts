import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor() { }
  firstName : string;
  show(name) {
    this.firstName = name;
  }
  agent = [
    new Agent(1, 'Sarbani', 'Mukherjee', 'KOL', 987890),
    new Agent(2, 'Debjit', 'Hati', 'BDW', 967480),
    new Agent(3, 'Partha', 'Ghosh', 'KOL', 823450),
    new Agent(4, 'Surya', 'Mazumder', 'KOL', 766780),
    new Agent(5, 'Sanchari', 'Roy', 'KOL', 534560),
    new Agent(6, 'Indrani', 'Bardhan', 'KOL', 534550),
  ]

  ngOnInit() {
  }

}
