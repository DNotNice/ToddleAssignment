import express from "express"
import { checkAuth } from "../../middlewares/Auth.js"
import { LikeSwitch } from "../../controller/index.js"


const router = express.Router()
router.post("/switch",checkAuth,LikeSwitch)


export { router as LikeRouter}