import { StatusCodes } from "http-status-codes";
import { createComment , deleteComment , getAllComments } from "../repositories/index.js";
import { AppError } from "../utils/index.js";
const Comment = async(data)=>{
    try {
        const comment = await createComment(data);
        return comment ;
    } catch (error) {
        throw new AppError("Something went wrong while posting your comment " , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
const delComm = async(data)=>{
    try {
        const delcomment = await deleteComment(data)
        return delcomment;
        
    } catch (error) {
        throw new AppError("Cannot delete the comment" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
const getComments = async()=>{
    try {
        const comments= await getAllComments();
        return comments ;
    } catch (error) {
        throw new AppError("Err occ" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export {Comment , delComm , getComments}