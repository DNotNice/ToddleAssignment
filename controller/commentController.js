import { StatusCodes } from "http-status-codes";
import { Comment } from "../service/index.js";
import { ErrorResp, SuccessResp } from "../utils/index.js";
import { delComm , getComments} from "../service/index.js";
const createComment = async(req, res)=>{
    try {
        console.log('here')
        const data = {
            userId : req.body.userId , 
            postId : req.body.postId ,
            Content : req.body.Content
        }
        const resp = await Comment(data);
        SuccessResp.data = resp ;
        if(resp == true)SuccessResp.message = "Comment posted Successfully"
        else SuccessResp.message = "User has disabled comments"
        return res.status(StatusCodes.ACCEPTED).json(SuccessResp);
        
    } catch (error) {
        ErrorResp.error = error;
        ErrorResp.error.explanation = "Error posting comment , please try again later"
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp)
    }
}
const deleteComment = async(req,res)=>{
    try {
        const commentId = parseInt(req.params.id);
        const comment = await delComm(commentId);
        SuccessResp.message = "Comment deleted Successfully"
        SuccessResp.data =comment;
        return res.status(StatusCodes.CREATED).json(SuccessResp)
    } catch (error) {
        ErrorResp.error = error;
        return res.status(error.StatusCodes).json(ErrorResp)
    }
}

const getAllComments = async(req, res)=>{
    try {
        const comments= await getComments();
        SuccessResp.message = "All comments";
        SuccessResp.data = comments;
        return res.status(StatusCodes.ACCEPTED).json(SuccessResp)
    } catch (error) {
        ErrorResp.error =error;
        ErrorResp.message = "Some error occured"
        return res.status(error.StatusCodes).json(ErrorResp);
    }
}
export {createComment , deleteComment , getAllComments}