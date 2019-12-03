import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CourseService } from '../../services/course.service';
// Import Models
import { Course } from '../../domain/schoolmng_db/course';

// START - USED SERVICES
/**
* courseService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* courseService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Course
 * @class CourseListComponent
 */
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    list: Course[];
    search: any = {};
    idSelected: string;
    constructor(
        private courseService: CourseService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.courseService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Course to remove
     *
     * @param {string} id Id of the Course to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Course
     */
    deleteItem() {
        this.courseService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
