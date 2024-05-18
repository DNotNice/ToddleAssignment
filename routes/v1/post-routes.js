import express from "express"
import { createPostController } from "../../controller/index.js"
import { checkAuth } from "../../middlewares/Auth.js";

const router = express.Router();
router.post("/" , checkAuth , createPostController);

export {router as PostRouter}