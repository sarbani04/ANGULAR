import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { CalcComponent } from './calc/calc.component';
import { EmployComponent } from './employ/employ.component';
import { AgentComponent } from './agent/agent.component';
import { EmployListComponent } from './employ-list/employ-list.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes : Routes = [
  {path : 'menu', component:MenuComponent, 
  children : 
  [
  {path:'first', component:FirstComponent, outlet:'data'},
  {path:'second', component:SecondComponent, outlet:'data'},
  {path:'calc', component:CalcComponent, outlet:'data'},
  {path:'employ', component:EmployComponent, outlet:'data'},
  {path:'employ-list', component:EmployListComponent, outlet:'data'},
  {path:'agent', component:AgentComponent, outlet:'data'},
  ]
},

  {path: '', component:LoginComponent},
  {path: 'menu', component:MenuComponent},
];

@NgModule({
  declarations: [
    
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    CalcComponent,
    EmployComponent,
    AgentComponent,
    EmployListComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
