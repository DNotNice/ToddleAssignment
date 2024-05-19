import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/index.js";
import { AppError } from "../utils/index.js";

const create = async(data)=>{
    const post = await prisma.post.create({
        data : {
            content : data.content ,
            image : data.image ,
            userId : data.userId,
            commentable : data.commentable
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

const getPost = async(data)=>{
    try {
        const posts = await prisma.post.findMany({
            where: {
                id: data,
            },
            include: {
                User:{
                    select:{
                        id:true,
                        username:true
                    }
                },
            },
        });
        return posts;
    } catch (error) {
        console.error(error);
        throw new AppError("Something went wrong while fetching posts" , StatusCodes.INTERNAL_SERVER_ERROR);
    } 
}

const deletePost= async(data)=>{
    try {
        const posts = await prisma.post.delete({
            where: {
                id: data,
            }
        });
        return posts;
    } catch (error) {
        console.error(error);
        throw new AppError("Something went wrong while deleting posts" , StatusCodes.INTERNAL_SERVER_ERROR);
    } 
}
export {create , getPosts , getPost , deletePost}
