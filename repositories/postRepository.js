import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/index.js";
import { prisma } from "../config/index.js";

const create = async(data)=>{
    console.log(data)
    const post = await prisma.post.create({
        data : {
            content : data.content ,
            image : data.image ,
            userId : data.userId
        }
    });
    return post ;
}

export {create}
