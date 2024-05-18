import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/index.js";
import { AppError } from "../utils/index.js";

const create = async(data)=>{
    const post = await prisma.post.create({
        data : {
            content : data.content ,
            image : data.image ,
            userId : data.userId
        }
    });
    return post ;
}

const getPosts = async()=>{
    try {
        const posts = await prisma.post.findMany({
            include:{
                User:{
                    select:{
                        id:true,
                        name :true,
                        email:true,
                        username:true
                    }
                },
                likes:{
                    select:{
                        id:true,
                        userId:true
                    }
                },
                comments:{
                    select:{
                        id:true,
                        userId:true,
                        Content:true
                    }
                }
            }
        })
        return posts;
    } catch (error) {
        console.log(error)
            throw new AppError("Something Went Wrong" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export {create , getPosts}
