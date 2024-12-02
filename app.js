//imports
import {corsOptions} from "./utils/configurations.js";
import express from "express";
import cors from 'cors';
import {userRouter} from "./routes/user.routes.js";
import * as customsM from "./middlewares/customs.middleware.js"

//app
export const app = express();

//middlewares
app.use(express.json());

app.use('/api/public',userRouter, cors(corsOptions), customsM.methodLimiter(['GET','POST']), (req,res)=>{
    res.json({"message":'public route'})
})

app.use('/api/private',userRouter, (req,res)=>{
    res.json({"message":'private route'})
})
