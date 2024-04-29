import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import multer from "multer"
import helmet from  "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import { register } from "./controller/auth.js"
import { verifyToken } from "./middleware/auth.js"
import { createPost } from "./controllers/posts.js"
 import  authRoutes from "./routes/auth.js"
 import userRoutes from "./routes/users.js"
import postRoutes  from './ROUTES/posts.js'


 



/* Configurations*/
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
dotenv.config();
const app=express()
app.use (express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,"public/assets")))

/*File Storage*/
const storage=multer.diskStorage({
   destination:function(req,file,cb){
    cb(null,"public/assets")},
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }

   } 
)
const upload = multer({storage})

/*Routes with Files*/
app.post("/auth/register",/*upload.single("picture")*/register)
app.post("/posts",verifyToken,upload.single("picture"),createPost)

/* If they want to register they have to call this api form the front end 
We are going to upload our picture locally in public/asset folder 
we use the middleware " upload" before the actual logical 

register the logic to save our user to our data base
the register our controller 
*/


/*Routes */
app.use("/auth",authRoutes)
app.use("/users",usersRoutes)
app.use("/posts",postsRoutes)


/*MOngoose SEtUp*/
const PORT=process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Server Port:${PORT}`))
})
.catch((error)=>console.log(`${error}did not connect`))