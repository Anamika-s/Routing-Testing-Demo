import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

import {routingComponents} from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TestpurposeComponent } from './testpurpose/testpurpose.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    TestpurposeComponent
    // OverviewComponent,
    // ContactComponent
    // DepartmentDetailsComponent
    // NotFoundComponent
    // DepartmentListComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
