import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService';
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService';

class CourseUnitController {

    async create(request:Request, response:Response) {
        const courseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService()

        const courseUnit = createCourseUnit.execute(courseUnitData);

        return response.json(courseUnit);
    }

    async show(request: Request, response:Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCoursesUnitsService();

        const coursesUnits = await getCoursesUnits.execute(userId);

        return response.json(coursesUnits);

    }
}

export {CourseUnitController}

