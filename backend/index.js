import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controller/auth.js";
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controller/post.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
import connectToDB from "./connectToDB.js";

/* Configurations*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.post("/auth/register", register);
app.post("/posts", verifyToken, createPost);

/*Routes */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
/*whenever we go to those url end points the app uses that router */
app.use("/posts", postRoutes);

/*MOngoose SEtUp*/
const PORT = process.env.PORT || 6001;
connectToDB();
app.listen(PORT, () => console.log(`Server Port:${PORT}`));
