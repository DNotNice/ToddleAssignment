import { followUser, unfollowUser, getFollowers, getFollowing } from '../repositories/followRepository.js';

// Follow a user
const followUserService = async (followerId, followingId) => {
    try {
       return  await followUser(followerId, followingId);
    } catch (error) {
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

// Unfollow a user
const unfollowUserService = async (followerId, followingId) => {
    try {
        await unfollowUser(followerId, followingId);
        return { message: 'User unfollowed successfully' };
    } catch (error) {
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

// Get followers list service
const getFollowersService = async (userId) => {
    try {
        return await getFollowers(userId);
    } catch (error) {
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

// Get following list service
const getFollowingService = async (userId) => {
    try {
        return await getFollowing(userId);
    } catch (error) {
        throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

export { followUserService, unfollowUserService, getFollowersService, getFollowingService };