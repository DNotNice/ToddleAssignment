import express from "express"
import { userRouter } from "./v1/user-routes.js";
import { PostRouter } from "./v1/post-routes.js";
import {LikeRouter } from "./v1/like-routes.js"

const router = express.Router()

router.use("/v1/user", userRouter)
router.use("/v1/post" , PostRouter)
router.use("/v1/like" , LikeRouter)

export {router as apiRoutes}