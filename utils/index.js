import jwt from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../config/index.js";
class AppError extends Error{
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode;
        this.explanation = message
    }
}

const ErrorResp = {
    success: false,
    message: "Something Went Wrong",
    data: {},
    error: {}
}

const SuccessResp = {
    success:true , 
    message : "Successfully completed the request",
    data :{},
    error :{}
}

const createToken = (data)=>{
    try {
        return jwt.sign(data , JWT_SECRET  )
    } catch (error) {
        console.log(error);
        throw error ;
    }
}
 const verifyToken = (token)=>{
    try {
        return jwt.verify(token ,JWT_SECRET);
    } catch (error) {

            console.log('error', error);
            throw error
        
    }

}
export {AppError , ErrorResp , SuccessResp , createToken , verifyToken}
