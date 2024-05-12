import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  createPost,
} from "../controller/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
/*Read */
router.get("/", verifyToken, getFeedPosts);
router.get(
  "/:userId/posts",
  verifyToken,
  getUserPosts
); /*this will grab the user specific post only  */

router.post("/", verifyToken, createPost);

/*Update */
router.patch(
  "/:id/like",
  verifyToken,
  likePost
); /*so this for liking it or unlinking it  */
export default router;
