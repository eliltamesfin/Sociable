import express from "express"
import {getUser,getUserFriends,addRemoveFriend}from "../controllers/getUserFriends.js"
import{verifyToken}from "../middleware/auth.js"

const router=express.Router();
/* Read route is where we grab information not saving anything to the database or updating or changing ex:CRUD
Create Read Update Delete */
/*Read */
router.get("/:id",verifyToken,getUser)/* the / will be users /:id if the the user or front end is sending a particular user id over :id//we can grab this user id and call our data base with that this particular id.This is called the query string that would grab the particular id  */ 

router.get(":/id/friends",verifyToken,getUserFriends)
/*This will grab the users friends separately   */

/*Update */
router.patch("/:id/:friendId",verifyToken,addRemoveFriend)/*So we need both the current user  who is logged in and the friend id who we want to add or remove  */

export default router
