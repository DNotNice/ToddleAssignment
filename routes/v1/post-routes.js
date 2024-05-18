import express from "express"
import { createPostController, getPosts } from "../../controller/index.js"
import { checkAuth } from "../../middlewares/Auth.js";

const router = express.Router();
router.post("/" , checkAuth , createPostController);
router.get("/" ,checkAuth, getPosts)

export {router as PostRouter}