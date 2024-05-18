import express from "express"
import { signup } from "../../controller/index.js"
import { validateSignUp } from "../../middlewares/index.js"
const router = express.Router()


router.post("/signup",validateSignUp,signup)



export { router as userRouter}