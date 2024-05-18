import { create } from "../repositories/index.js";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/index.js";

const createPost = async(data)=>{
    try {
        const post= await create(data);
        return post ;
    } catch (error) {   
        throw new AppError("Something went wrong while creating post" , StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}
export { createPost}