import { createUser } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";


const createUserService = async(data)=>{
        try{
            const user = await createUser(data);
            return user ; 
        }catch(error){
             throw new AppError(error.message , StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

export {createUserService }