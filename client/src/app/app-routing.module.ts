// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CourseEditComponent} from './pages/course-edit/course-edit.component';
import { CourseListComponent} from './pages/course-list/course-list.component';
import { ExamEditComponent} from './pages/exam-edit/exam-edit.component';
import { ExamListComponent} from './pages/exam-list/exam-list.component';
import { StudentEditComponent} from './pages/student-edit/student-edit.component';
import { StudentListComponent} from './pages/student-list/student-list.component';
import { TeacherEditComponent} from './pages/teacher-edit/teacher-edit.component';
import { TeacherListComponent} from './pages/teacher-list/teacher-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'courses/:id',  loadChildren: './pages/course-edit/course-edit.module#CourseEditModule' , canActivate: [AuthGuard] },
    { path: 'courses',  loadChildren: './pages/course-list/course-list.module#CourseListModule' , canActivate: [AuthGuard] },
    { path: 'exams/:id',  loadChildren: './pages/exam-edit/exam-edit.module#ExamEditModule' , canActivate: [AuthGuard] },
    { path: 'exams',  loadChildren: './pages/exam-list/exam-list.module#ExamListModule' , canActivate: [AuthGuard] },
    { path: 'students/:id',  loadChildren: './pages/student-edit/student-edit.module#StudentEditModule' , canActivate: [AuthGuard] },
    { path: 'students',  loadChildren: './pages/student-list/student-list.module#StudentListModule' , canActivate: [AuthGuard] },
    { path: 'teachers/:id',  loadChildren: './pages/teacher-edit/teacher-edit.module#TeacherEditModule' , canActivate: [AuthGuard] },
    { path: 'teachers',  loadChildren: './pages/teacher-list/teacher-list.module#TeacherListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
