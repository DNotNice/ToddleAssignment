import express from "express"
import { signup , signIn } from "../../controller/index.js"
import { validateSignIn, validateSignUp } from "../../middlewares/index.js"
const router = express.Router()


router.post("/signup",validateSignUp,signup)
router.post("/signin" , validateSignIn , signIn)



export { router as userRouter}