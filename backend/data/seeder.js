import { disconnect } from "mongoose";
import User from "../models/User.js";
import Post from "../models/Post.js";
import connectToDB from "../connectToDB.js";
import { users, posts } from "./index.js";

await connectToDB();

await User.insertMany(users);
await Post.insertMany(posts);
await disconnect();
