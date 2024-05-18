import express from "express"
import { createPostController, getPosts  , getPost, deletePost} from "../../controller/index.js"
import { checkAuth } from "../../middlewares/Auth.js";

const router = express.Router();
router.post("/" , checkAuth , createPostController);
router.get("/" ,checkAuth, getPosts)
router.get('/:id' , checkAuth , getPost)
router.delete('/:id' , checkAuth , deletePost)

export {router as PostRouter}