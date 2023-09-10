import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {getAllUsersEmail} from "./cron.js";

const app = express();
dotenv.config();

const connect= async() => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDb")
    }
    catch(error){
      throw error 
    }
    
}

mongoose.connection.on("disconnected" , ()=> {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB Connected")
})

//Calling Our Cron Job Here, Which just shows the data of all the emails of the users.
getAllUsersEmail();


app.listen(8800, ()=> {
    connect();
    console.log("Connected to Backend!");
})
