import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherEditComponent } from './teacher-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEditRoutingModule { }
