import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.mongoURL;

export const connectToDB = () => {
    mongoose.connect(url).
    then(()=>{
        console.log("connection success")
    }).
    catch((err)=>{
        console.log("connection faulted", err);
    });
}