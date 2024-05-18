import express from "express"
import { userRouter } from "./v1/user-routes.js";
const router = express.Router()

router.use("/v1/user", userRouter)
export {router as apiRoutes}