import { signup , signIn  } from "./userController.js";
import { createPostController ,getPosts  ,getPost , deletePost} from "./postController.js";
import { LikeSwitch } from "./likeController.js";
import { createComment , deleteComment , getAllComments } from "./commentController.js";
export {signup , signIn , createPostController ,
        getPosts ,getPost , deletePost , LikeSwitch 
        , createComment , deleteComment , getAllComments}