import express from "express"
import {getFeedPosts,getUserPosts,likePost}from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"

const router=express.Router()
/*Read */
router.get("/",verifyToken,getFeedPosts)
router.get("/:userId/posts",verifyToken,getUserPosts)/*this will grab the user specific post only  */


/*Update */
router.patch("/:id/like",verifyToken,likePost)/*so this for liking it or unlinking it  */
export default router
