import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherEditComponent } from './teacher-edit.component';
import { TeacherEditRoutingModule } from './teacher-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TeacherEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TeacherEditComponent
  ]
})
export class TeacherEditModule { }
