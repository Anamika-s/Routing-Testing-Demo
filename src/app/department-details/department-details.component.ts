import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-details',
  template: `<h3> Department Details </h3> 
   <b> ID {{departmentID}} is recived </b>
   <p>
   <button (click)="overview()"> Show Overview </button>
   
   <button (click)="contact()"> Show Contact </button>
   </p>
   <router-outlet> </router-outlet>
`,
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
 departmentID  : any;
  constructor(private _activateRoute : ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
     let id  =this._activateRoute.snapshot.paramMap.get("id");
     this.departmentID =  id;
  }
  overview()
  {
console.log("Inside overview");
this.router.navigate(['overview'], {relativeTo:this._activateRoute});
 
  }
  contact()
  {
    console.log("Inside contact");
    this.router.navigate(['contact'], {relativeTo:this._activateRoute});
  }
}
