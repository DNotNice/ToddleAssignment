import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/index.js";
import { prisma } from "../config/index.js";

const followUser = async(followerId , followingId)=>{
    try {
      // Check if the user already follows the userToFollowId
      const existingFollow = await prisma.follows.findFirst({
        where: {
          followerId: followerId,
          followingId: followingId     
           }
      });
      if (existingFollow) {
        return "Already follows the person"
    }
  
      // Create a new follow relationship
      const rs = await prisma.follows.create({
        data: {
          follower: { connect: { id: followerId } },
          following: { connect: { id: followingId } }
        }
      });
      return 'User followed successfully.';
    } catch (error) {
        console.log(error)
        throw new AppError("error following user" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
  const unfollowUser = async(userId, userToUnfollowId)=>{
    try {
      
      const existingFollow = await prisma.follows.findFirst({
        where: {
          followerId: userId,
          followingId: userToUnfollowId
        }
      });
  
      if (!existingFollow) {
        throw new AppError('You are not following this user.' , StatusCodes.BAD_REQUEST);
      }
  
      // Delete the follow relationship
      await prisma.follows.delete({
        where: {
          followerId_followingId: {
            followerId: userId,
            followingId: userToUnfollowId
          }
        }
      });
  
      return 'User unfollowed successfully.';
    } catch (error) {
      throw new AppError("Server error", StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  const  getFollowers = async(userId)=>{
    try {
        const followers = await prisma.user.findUnique({
        where: { id: userId },
        include: { followers: true }
      });
  
      return followers.followers;
    } catch (error) {
        console.log(error)
        throw new AppError("Server Error" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
  
 const getFollowing = async(userId)=>{
    try {
      // Fetch all users followed by the user
      const following = await prisma.user.findUnique({
        where: { id: userId },
        include: { following: true }
      });
      
      return following.following;
    } catch (error) {
        console.log(error)
      throw new AppError("Server Error" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
  
  
  export {followUser , unfollowUser , getFollowers , getFollowing}
  