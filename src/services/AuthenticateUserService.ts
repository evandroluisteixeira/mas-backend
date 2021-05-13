import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken';
import { getRepository } from "typeorm"
import { User } from "../models/User"
import authConfig from '../config/auth'


interface AuthData {
    email: string;
    password: string;
}

class AuthenticateUserService {
    public async execute({email, password}: AuthData): Promise<String | {}>{

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email});

        if(!user){
            return {
                error: 'user not found'
            }
        }

        const comparePassword = compare(password, user.password)

if(!comparePassword){
    return {
        error: 'incorrect password'
    }
}
        const {secret, expiresIn} = authConfig.jwt

        const token = sign({"role":"user"}, secret, {
            subject: user.id,
            expiresIn

        });

        return token;

    }

}

export {AuthenticateUserService}