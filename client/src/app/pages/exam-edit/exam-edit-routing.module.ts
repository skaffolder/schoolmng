import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamEditComponent } from './exam-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExamEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamEditRoutingModule { }
