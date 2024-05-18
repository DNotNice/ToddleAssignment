import { StatusCodes } from "http-status-codes";
import { ErrorResp , AppError } from "../utils/index.js";

 function validateSignUp(req , res , next){
    if(!req.body.email ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Email Not found" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    if(!req.body.username ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Username Not found" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    if(!req.body.password ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Password Missing" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    if(!req.body.name ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Name Missing" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    next();
}

function validateSignIn(req , res , next){
    if(!req.body.username ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Username Not found" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    if(!req.body.password ){
        ErrorResp.message = "Something went wrong during validation";
        ErrorResp.error = new AppError("Password Missing" , StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
    next();
}


export { validateSignUp  , validateSignIn} ;