import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExamService } from '../../services/exam.service';
// Import Models
import { Exam } from '../../domain/schoolmng_db/exam';

// START - USED SERVICES
/**
* examService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* examService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Exam
 * @class ExamListComponent
 */
@Component({
    selector: 'app-exam-list',
    templateUrl: './exam-list.component.html',
    styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
    list: Exam[];
    search: any = {};
    idSelected: string;
    constructor(
        private examService: ExamService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.examService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Exam to remove
     *
     * @param {string} id Id of the Exam to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Exam
     */
    deleteItem() {
        this.examService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
