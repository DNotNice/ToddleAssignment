import {hash , compareSync} from "bcrypt"
import { SALT } from "../config/index.js"
import { isAuthenticated } from "../service/index.js"
import { StatusCodes } from "http-status-codes"
const hashPassword = async(password)=>{
    const number = Number(SALT)
    return await hash(password ,number )
}
const checkPassword = async(userPassword, encryptedPassword)=>{
    try {
        return compareSync(userPassword ,encryptedPassword)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const checkAuth = async(req, res ,next)=>{
    try {
            const token = req.headers['x-access-token']
            const response = await isAuthenticated(token)
            if(response){                    
                req.body.userId = response ;
                next();
            }
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json(error)
    }
}
export {hashPassword  , checkPassword , checkAuth}