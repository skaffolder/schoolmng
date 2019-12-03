import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditComponent } from './student-edit.component';
import { StudentEditRoutingModule } from './student-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentEditComponent
  ]
})
export class StudentEditModule { }
