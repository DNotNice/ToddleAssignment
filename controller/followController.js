import { StatusCodes } from 'http-status-codes';
import { followUserService, unfollowUserService, getFollowersService, getFollowingService } from '../service/followService.js';
import { SuccessResp, ErrorResp } from '../utils/index.js';


const followUser = async (req, res) => {
    try {
        const { followerId, followingId } = req.body;
        const response = await followUserService(followerId, followingId);
        SuccessResp.data = response;
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
};

// Unfollow user controller
const unfollowUser = async (req, res) => {
    try {
        const { followerId, followingId } = req.body;
        const response = await unfollowUserService(followerId, followingId);
        SuccessResp.data = response;
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
};

// Get followers list controller
const getFollowers = async (req, res) => {
    try {
        const userId = req.body.userId;
        console.log('userId', userId)
        const followers = await getFollowersService(userId);
        SuccessResp.data = followers;
        SuccessResp.message="followers"
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
};

// Get following list controller
const getFollowing = async (req, res) => {
    try {
        const { userId } = req.body.userId;
        const following = await getFollowingService(userId);
        SuccessResp.data = following;
        return res.status(StatusCodes.OK).json(SuccessResp);
    } catch (error) {
        ErrorResp.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResp);
    }
};

export { followUser, unfollowUser, getFollowers, getFollowing };