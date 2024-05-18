import { createUser  , findUser , get} from "../repositories/index.js";
import { AppError, createToken, verifyToken } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";
import { checkPassword } from "../middlewares/Auth.js";


const createUserService = async(data)=>{
        try{
            const user = await createUser(data);
            return user ; 
        }catch(error){
             throw new AppError(error.message , StatusCodes.INTERNAL_SERVER_ERROR);
        }
}
const SignIn = async(data)=>{
    try {
        const user = await findUser(data);
        if(!user) throw new AppError("No such user exists" , StatusCodes.NOT_FOUND);
        const passwordMatch = checkPassword(data.password , user.password)
        if(!passwordMatch) throw new AppError("Password Incorrect" , StatusCodes.BAD_REQUEST) 
        const jwtToken = createToken({id :user.id , email:user.email ,name:user.name});
        return jwtToken
    } catch (error) {
        if(error instanceof AppError) throw error;
        throw new AppError("something went wrong" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function isAuthenticated(token){
    try {
        if(!token)throw new AppError("Missing JWT token", StatusCodes.BAD_REQUEST);
        const response = verifyToken(token);
        const user = await get(response.id);
        if(!user)throw new AppError("No User found", StatusCodes.NOT_FOUND);
        return user.id;
    } catch (error) {
        if(error instanceof AppError) throw error;
        if(error.name == 'JsonWebTokenError'){
            throw new AppError("Invalid JWT token", StatusCodes.BAD_REQUEST);
        }
        if(error.name == 'TokenExpiredError'){
            throw new AppError("JWT token expired", StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Something went wrong", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export {createUserService  , SignIn , isAuthenticated}