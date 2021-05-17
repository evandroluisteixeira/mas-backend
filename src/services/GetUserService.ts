import { getRepository } from "typeorm";
import { User } from "../models/User";

interface UserData {
    id?: string;
}

class GetUserService{

    public async execute({id}:UserData): Promise<User | {}>{

        if(!id){
            return{
                error: 'id not found in the parameter'
            }
        }

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({id});

        if(!user){
            return {
                message:'user not found'
            }
        }

        return{
            id:user.id,
            name:user.name,
            email:user.email
        };

    }

}

export {GetUserService}