import { StatusCodes } from "http-status-codes";
import { LikeSwitch } from "../repositories/index.js"
import { AppError } from "../utils/index.js";

const likeSwitching = async(data)=>{
    try {
        const like = await LikeSwitch(data);
        return like ;
    } catch (error) {
        throw new AppError("Something wrong in like/unlike of the post" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
export {likeSwitching}