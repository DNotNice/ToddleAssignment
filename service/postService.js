import { create , getPosts ,getPost, deletePost} from "../repositories/index.js";
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
const getAllPosts = async()=>{
    try {    
        const posts = await getPosts();
        return posts;
    } catch (error) {
        throw new AppError("Something went wrong while fetching all posts" , StatusCodes.INTERNAL_SERVER_ERROR);
    }

}
const getPostwithId = async(id)=>{
    try {
        const post = await getPost(id);
        return post ;
    } catch (error) {
        throw new AppError("Something went wrong while fetching post" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
const deletePostWithId = async(id)=>{
    try {
        const post = await deletePost(id);
        return post ;
    } catch (error) {
        throw new AppError("Something went wrong while deleting post" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { createPost ,getAllPosts ,getPostwithId , deletePostWithId}