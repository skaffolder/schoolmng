import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list.component';
import { TeacherListRoutingModule } from './teacher-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TeacherListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TeacherListComponent
  ]
})
export class TeacherListModule { }
