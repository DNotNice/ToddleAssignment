import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/index.js"
import { AppError } from "../utils/index.js";

const LikeSwitch = async(data)=>{
    try {
    const existinglike = await prisma.like.findFirst({
        where:{
            userId: data.userId ,
            postId : data.postId   
        }
    });
    if(existinglike){
        await prisma.like.delete({
            where:{
                id:existinglike.id
            }
        })
        return false;
    }
    await prisma.like.create({
        data:data
    });
    return true;
    }   
    catch (error) {
        throw new AppError("Something went wrong in Like/Unliking the post" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
export {LikeSwitch}
