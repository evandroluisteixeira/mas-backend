import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../models/User'

interface UserData {
    name: string;
    email: string;
    password: string
}

class CreateUserService {

    public async execute({name, email, password}: UserData): Promise<User | {}>{

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({email})

        if(checkUserExists){
            return{
                error:"Email adress already exist"
            }
        }
        
        const hashedPasswrd = await hash(password, 8);

        const user =  usersRepository.create({
            name,
            email,
            password: hashedPasswrd
        });

        await usersRepository.save(user);

        return user;

    }
}

export {CreateUserService}