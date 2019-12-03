import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamEditComponent } from './exam-edit.component';
import { ExamEditRoutingModule } from './exam-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamEditComponent
  ]
})
export class ExamEditModule { }
