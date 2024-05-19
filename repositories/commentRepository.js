import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/index.js"
import { AppError } from "../utils/index.js";

const createComment = async(data)=>{
    try {
    const findPost = await prisma.post.findFirst({
        where :{
            id : data.postId 
        }
    })
    if(findPost.commentable == false )return false;
    console.log('data', data)
    const comment = await prisma.comment.create({
            data :  {
                userId : data.userId,
                postId : data.postId,
                Content : data.Content
            }
    })
        return true;
    }
    catch (error) {
        console.log(error)
        throw new AppError("Something went wrong on the server" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const deleteComment = async(data)=>{
    try {
        
        const comment = await prisma.comment.delete({
            where:{
                id : data
            }
        })
        return true ;
    } catch (error) {
        throw new AppError("Something unsual happened on the server" , StatusCodes.INTERNAL_SERVER_ERROR)   
    }
}

const getAllComments = async()=>{
    try{
        const comments = await prisma.comment.findMany()
        return comments;
    }catch(error){
            throw new AppError("Some error on server" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
export {createComment , deleteComment , getAllComments}