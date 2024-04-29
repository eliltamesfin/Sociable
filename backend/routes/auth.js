import express from 'express'
import {login} from "../controller/auth.js"

const router = express.Router() /* this will alow us express to identify this routes will all be configured.and allows us to have this in separate files    */ 
router.post("/login",login)

export default router
