import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditComponent } from './course-edit.component';
import { CourseEditRoutingModule } from './course-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CourseEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CourseEditComponent
  ]
})
export class CourseEditModule { }
