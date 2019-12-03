import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamListComponent } from './exam-list.component';
import { ExamListRoutingModule } from './exam-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamListComponent
  ]
})
export class ExamListModule { }
