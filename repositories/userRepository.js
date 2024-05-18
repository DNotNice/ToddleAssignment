import { AppError } from "../utils/index.js";
import { prisma } from "../config/index.js";
import { StatusCodes } from "http-status-codes"; 
import {hash} from "bcrypt"
import { SALT } from "../config/index.js";
import {hashPassword} from "../middlewares/hashPassword.js";
const createUser = async(data)=>{
    try{
        const hashedPassword = await hashPassword(data.password)
        const user = await prisma.user.create({
         data:{ 
                email : data.email , 
                username : data.username, 
                password : hashedPassword,
                name : data.name 
         }
    })
        return user ;
    } catch(error){
        if (error.code === 'P2002') {
            throw new AppError("PrismaClientKnownRequestError" , StatusCodes.BAD_REQUEST)
        }
        throw new AppError(  error , StatusCodes.BAD_REQUEST);
        
    }
}

export {createUser};