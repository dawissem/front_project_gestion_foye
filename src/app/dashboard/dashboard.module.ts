import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';


@NgModule({
  declarations: [

    DashboardAdminComponent,
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    
    // DashboardRoutingModule
  ],
  exports: [
    DashboardStudentComponent,
    DashboardAdminComponent
  ]
})
export class DashboardModule { }
