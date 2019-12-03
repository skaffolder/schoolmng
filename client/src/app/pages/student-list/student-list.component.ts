import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { StudentService } from '../../services/student.service';
// Import Models
import { Student } from '../../domain/schoolmng_db/student';

// START - USED SERVICES
/**
* studentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* studentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Student
 * @class StudentListComponent
 */
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    list: Student[];
    search: any = {};
    idSelected: string;
    constructor(
        private studentService: StudentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.studentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Student to remove
     *
     * @param {string} id Id of the Student to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Student
     */
    deleteItem() {
        this.studentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
