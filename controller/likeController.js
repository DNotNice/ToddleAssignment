import { StatusCodes } from "http-status-codes";
import { likeSwitching } from "../service/index.js"
import { ErrorResp, SuccessResp } from "../utils/index.js";

const LikeSwitch = async(req, res)=>{
    try {
        const response = await likeSwitching(req.body);
        SuccessResp.data = response;
        if(response) SuccessResp.message = "Post Liked"
        else SuccessResp.message = "Post Unliked"
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        res.status(StatusCodes.NOT_IMPLEMENTED).json(ErrorResp)
    }
}
export {LikeSwitch}