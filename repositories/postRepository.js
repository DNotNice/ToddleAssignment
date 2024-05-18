import { prisma } from "../config/index.js";

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

export {create}
