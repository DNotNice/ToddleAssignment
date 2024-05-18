import { createPost ,getAllPosts} from "../service/index.js";
import { StatusCodes } from "http-status-codes";
import { SuccessResp ,ErrorResp } from "../utils/index.js";
import { FileConfig } from "../config/index.js";

const createPostController  = async(req ,res)=>{
    const signleUploader = FileConfig.single('image');
    const userId = req.body.userId ;
    try{
        signleUploader(req, res , async function(err ,data){
            if(err){
                ErrorResp.message = "Image upload to s3 failed",
                ErrorResp.error = err 
                return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
            }
            const payload = {...req.body}
            if(req.file) payload.image =req.file.location ;
            payload.userId = userId ;
            const response = await createPost(payload);
            SuccessResp.data = response;
            SuccessResp.message = "Post Created Successfullly";
            return res.status(StatusCodes.CREATED).json(SuccessResp);
        })
    }catch(error){
        console.log("error in uploading")
        ErrorResp.error =error;
        res.status(error.statusCodes).json(ErrorResp)
    }
} 

 const getPosts = async(req, res)=>{
    try {
        const response = await getAllPosts();
        SuccessResp.data = response;
        SuccessResp.message = "Posts fetched successfully";
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        ErrorResp.message = "Something went wrong while fetching posts";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResp);
    }
 }
export {createPostController ,getPosts}