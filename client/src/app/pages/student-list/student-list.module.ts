import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentListRoutingModule } from './student-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentListComponent
  ]
})
export class StudentListModule { }
