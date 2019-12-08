// BASE SERVICE
import { ExamBaseService } from './base/exam.base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// start documentation
/**
 * Custom APIs
 *
 * Service.validate
 *	@description This API is used to validate the exam
 *	@param String id id of the exam
 *	@returns Boolean
 *
 */
// end documentation

/**
 * YOU CAN OVERRIDE HERE examBaseService
 */
export class ExamService extends ExamBaseService {


    /**
    * examService.validate
    *   @description This API is used to validate the exam
    *   @param String id id of the exam
    *   @returns Boolean
    *
    */
   validate(id: string): Observable<any> {
    return this.http
        .post<any>(this.contextUrl + '/' + id + '/validate', {})
        .pipe(
            map(response => response)
        );
    }

}
