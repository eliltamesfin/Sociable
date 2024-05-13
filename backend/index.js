import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
import connectToDB from "./connectToDB.js";

/* Configurations*/
dotenv.config();
const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

/*Routes */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
/*whenever we go to those url end points the app uses that router */
app.use("/posts", postRoutes);

/*Mongoose SetUp*/
connectToDB();

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => console.log(`Server Port:${PORT}`));
