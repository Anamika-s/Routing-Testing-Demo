import { Component, OnInit } from '@angular/core';
import {Router} from   '@angular/router';
 
@Component({
  selector: 'app-department-list',
  template: `<h3> 
  Department List </h3>
  <ul class="items">
  <li (click)="OnSelect(department)" *ngFor="let department of departments">
  <span class="badge"> {{department.id}} </span>  {{department.name}}
  </li>
  </ul>
  `,
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {
  id : number=0;
 departments =
 [
   { "id":1 , "name" :"Angular1"},
   { "id":2 , "name" :"Angular2"},
   { "id":3 , "name" :"Angular3"},
   { "id":4 , "name" :"Angular4"},
   { "id":5 , "name" :"Angular5"},
   

 ];
 OnSelect(department : any)
 {
   console.log(department.id);
    this.id = department.id;
    this.route.navigate(["/departments", this.id]);

 }
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

}
