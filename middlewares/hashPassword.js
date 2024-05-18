import {hash} from "bcrypt"
import { SALT } from "../config/index.js"
const hashPassword = async(password)=>{
    const number = Number(SALT)
    return await hash(password ,number )
}
export {hashPassword}