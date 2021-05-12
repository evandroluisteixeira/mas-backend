<<<<<<< Updated upstream
import {request, Router} from 'express';

const routes = Router();

routes.get('/user' , (request, response) =>{
    const{nome, idade}=request.query;

    response.json({
        idade,
        nome, 
        message: "Idade e Nome"
    })

})
=======
import {Request, Router, Response, response} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import {AuthenticateController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

const userController = new UserController()
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()
const autheticateController = new AuthenticateController()

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', autheticateController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
>>>>>>> Stashed changes

export default routes;
