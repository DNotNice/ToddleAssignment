import express from "express"
import { signup , signIn } from "../../controller/index.js"
import { validateSignIn, validateSignUp } from "../../middlewares/index.js"
import { followUser, unfollowUser, getFollowers, getFollowing} from '../../controller/followController.js';
import { checkAuth } from "../../middlewares/Auth.js";
const router = express.Router()


router.post("/signup", validateSignUp,signup)
router.post("/signin" , validateSignIn , signIn)
router.post("/follow" , checkAuth , followUser)
router.post("/unfollow" ,checkAuth, unfollowUser)
router.get("/followers" ,checkAuth, getFollowers)
router.get("/following" ,checkAuth, getFollowing)


export { router as userRouter}