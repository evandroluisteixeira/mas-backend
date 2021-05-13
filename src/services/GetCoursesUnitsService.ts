import { getRepository } from "typeorm"
import { CourseUnit } from "../models/CourseUnit"

interface UserId {
    id?: string;
}

class GetCoursesUnitsService{

    public async execute({id}:UserId){

        const courseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = courseUnitRepository.find();

        if(!coursesUnits){
            return {
                message:'courses units not found'
            }
        }

        return coursesUnits;

    }


}

export {GetCoursesUnitsService}