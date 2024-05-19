import express from "express"
import { checkAuth } from "../../middlewares/Auth.js"
import { createComment, deleteComment, getAllComments } from "../../controller/index.js"
import { check } from "prisma"


const router = express.Router()

router.post("/",checkAuth,createComment)
router.delete("/:id", checkAuth , deleteComment)
router.get("/" , checkAuth , getAllComments)

export { router as CommentRouter}