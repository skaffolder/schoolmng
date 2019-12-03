// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { ExamService } from '../../services/exam.service';
import { TeacherService } from '../../services/teacher.service';
// Import Models
import { Course } from '../../domain/schoolmng_db/course';
import { Student } from '../../domain/schoolmng_db/student';
import { Exam } from '../../domain/schoolmng_db/exam';
import { Teacher } from '../../domain/schoolmng_db/teacher';

// START - USED SERVICES
/**
* courseService.create
*	@description CRUD ACTION create
*
* studentService.findBy_attend_courses
*	@description CRUD ACTION findBy_attend_courses
*	@param Objectid key Id della risorsa _attend_courses da cercare
*
* examService.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key Id della risorsa _course da cercare
*
* teacherService.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key Id della risorsa _courses da cercare
*
* courseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* courseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Course
 */
@Component({
    selector: 'app-course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    item: Course;
    list_attend_courses: Course[];
    list_course: Course[];
    list_courses: Course[];
    externalStudent: Student[];
    externalExam: Exam[];
    externalTeacher: Teacher[];
    model: Course;
    formValid: Boolean;

    constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private examService: ExamService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Course();
        this.externalStudent = [];
        this.externalExam = [];
        this.externalTeacher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.courseService.get(id).subscribe(item => this.item = item);
                this.studentService.findBy_attend_courses(id).subscribe(list => this.externalStudent = list);
                this.examService.findBy_course(id).subscribe(list => this.externalExam = list);
                this.teacherService.findBy_courses(id).subscribe(list => this.externalTeacher = list);
            }
            // Get relations
        });
    }


    /**
     * Save Course
     *
     * @param {boolean} formValid Form validity check
     * @param Course item Course to save
     */
    save(formValid: boolean, item: Course): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.courseService.update(item).subscribe(data => this.goBack());
            } else {
                this.courseService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



