import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TeacherService } from '../../services/teacher.service';
// Import Models
import { Teacher } from '../../domain/schoolmng_db/teacher';

// START - USED SERVICES
/**
* teacherService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* teacherService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Teacher
 * @class TeacherListComponent
 */
@Component({
    selector: 'app-teacher-list',
    templateUrl: './teacher-list.component.html',
    styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
    list: Teacher[];
    search: any = {};
    idSelected: string;
    constructor(
        private teacherService: TeacherService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.teacherService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Teacher to remove
     *
     * @param {string} id Id of the Teacher to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Teacher
     */
    deleteItem() {
        this.teacherService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
