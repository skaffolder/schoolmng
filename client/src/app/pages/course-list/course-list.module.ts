import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseListRoutingModule } from './course-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CourseListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CourseListComponent
  ]
})
export class CourseListModule { }
