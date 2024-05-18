import {hash , compareSync} from "bcrypt"
import { SALT } from "../config/index.js"
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
export {hashPassword  , checkPassword}