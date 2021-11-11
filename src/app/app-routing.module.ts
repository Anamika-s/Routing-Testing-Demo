import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { ActivateGuard } from './activate.guard';
import {UserService} from   './user.service';
const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'departments', component:DepartmentListComponent , canActivate:[ActivateGuard]},
  {path:'departments/:id' , component: DepartmentDetailsComponent,
  children:[
  
 {path : 'overview', component:OverviewComponent},
 {path : 'contact' ,  component :  ContactComponent}
   ]},
  {path:'employees', component:EmployeeListComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ActivateGuard, UserService]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent, EmployeeListComponent
,NotFoundComponent,DepartmentDetailsComponent,
OverviewComponent,ContactComponent
];
