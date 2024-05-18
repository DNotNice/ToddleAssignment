import { createUserService } from "../service/index.js";
import { SuccessResp , ErrorResp} from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

    const signup = async(req ,res)=>{
        
        const data = {
            email : req.body.email ,
            password : req.body.password , 
            username : req.body.username ,
            name : req.body.name 
        }
            try{
                const user = await createUserService(data)
                SuccessResp.data = user ;
                SuccessResp.message = "User Created Successfully"
                return res.status(StatusCodes.CREATED).json(SuccessResp)

            }catch(error){
                
                if(error = "PrismaClientKnownRequestError")ErrorResp.error.explanation = "User exists with this email or username"
                else ErrorResp.error = error ;
                return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp)
            }
}

export { signup}
