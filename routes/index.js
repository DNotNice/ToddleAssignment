import express from "express"
import { userRouter } from "./v1/user-routes.js";
import { PostRouter } from "./v1/post-routes.js";
const router = express.Router()

router.use("/v1/user", userRouter)
router.use("/v1/post" , PostRouter)

export {router as apiRoutes}