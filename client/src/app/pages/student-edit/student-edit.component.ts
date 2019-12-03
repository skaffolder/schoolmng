// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { ExamService } from '../../services/exam.service';
import { CourseService } from '../../services/course.service';
// Import Models
import { Student } from '../../domain/schoolmng_db/student';
import { Course } from '../../domain/schoolmng_db/course';
import { Exam } from '../../domain/schoolmng_db/exam';

// START - USED SERVICES
/**
* studentService.create
*	@description CRUD ACTION create
*
* examService.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key Id della risorsa _student da cercare
*
* studentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* courseService.list
*	@description CRUD ACTION list
*
* studentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    list_attend_courses: Course[];
    list_student: Student[];
    externalExam: Exam[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private examService: ExamService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalExam = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.examService.findBy_student(id).subscribe(list => this.externalExam = list);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_attend_courses = list);
        });
    }

    /**
     * Check if an Course is in  _attend_courses
     *
     * @param {string} id Id of Course to search
     * @returns {boolean} True if it is found
     */
    containCourse(id: string): boolean {
        if (!this.item._attend_courses) return false;
        return this.item._attend_courses.indexOf(id) !== -1;
    }

    /**
     * Add Course from Student
     *
     * @param {string} id Id of Course to add in this.item._attend_courses array
     */
    addCourse(id: string) {
        if (!this.item._attend_courses)
            this.item._attend_courses = [];
        this.item._attend_courses.push(id);
    }

    /**
     * Remove an Course from a Student
     *
     * @param {number} index Index of Course in this.item._attend_courses array
     */
    removeCourse(index: number) {
        this.item._attend_courses.splice(index, 1);
    }

    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
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



