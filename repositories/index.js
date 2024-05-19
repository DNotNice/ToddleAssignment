import { createUser , findUser , get  } from "./userRepository.js";
import { create  , getPosts  ,getPost ,deletePost} from "./postRepository.js";
import { LikeSwitch } from "./likeRepository.js";
import { createComment , deleteComment ,getAllComments } from "./commentRepository.js";
export {createUser , findUser , get , create 
       ,getPosts ,getPost ,deletePost , LikeSwitch 
       , createComment , deleteComment , getAllComments}