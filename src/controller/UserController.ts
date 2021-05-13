import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { GetUsersService } from '../services/GetUsersService';

class UserController {
    async create(request:Request, response:Response){
        const userData = request.body

        const createUser = new CreateUserService()

        const user = await createUser.execute(userData);

        return response.json(user);
    }

    async show(request: Request, response:Response){
        const userId = request.body.user;

        const getUsers = new GetUsersService();

        const users = await getUsers.execute(userId);

        return response.json(users);

    }

}

export {UserController};