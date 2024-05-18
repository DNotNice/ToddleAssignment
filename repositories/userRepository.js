import { AppError } from "../utils/index.js";
import { prisma } from "../config/index.js";
import { StatusCodes } from "http-status-codes"; 
import { hashPassword } from "../middlewares/Auth.js";


const createUser = async(data)=>{
    try{
        const hashedPassword = await hashPassword(data.password)
        const user = await prisma.user.create({
         data:{ 
                email : data.email , 
                username : data.username, 
                password : hashedPassword,
                name : data.name 
         }
    })
        return user ;
    } catch(error){
        if (error.code === 'P2002') {
            throw new AppError("PrismaClientKnownRequestError" , StatusCodes.BAD_REQUEST)
        }
        throw new AppError(  error , StatusCodes.BAD_REQUEST);
        
    }
}


const findUser = async(data)=>{
    try {
        const user = await prisma.user.findFirst({
            where:{
                OR:[
                    {
                        email:{
                            contains: data.username 
                        }
                    },{
                        username : {
                            contains : data.username 
                        }
                    }
                ]
            }
        })
        if(user) return user ;
    } catch (error) {
        throw new AppError("User not found with these credentials" , StatusCodes.BAD_REQUEST);
    }
}

const get = async(data)=>{
    try {
        const user = prisma.user.findUnique({
            where : {
                id : data
            }
        });
        if(!user) throw new AppError("Not able to find user " , StatusCodes.NOT_FOUND);
        return user ;
    } catch (error) {
        throw new AppError("User not found" , StatusCodes.BAD_REQUEST);
    }
}

export {createUser , findUser , get};