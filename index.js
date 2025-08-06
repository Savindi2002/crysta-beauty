import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';

const app=express();
mongoose.connect("mongodb+srv://admin:123@cluster0.qqmhplg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("connection failed");
    }
)

app.use(bodyParser.json());
app.use(
    (req,res,next)=>{
        const header=req.header("Authorization");
        console.log(header);
        //next()

    }
)
app.use("/student",studentRouter);
app.use("/api/item",itemRouter);
app.use("/api/user",userRouter);



app.listen(5000,
    ()=>{
    console.log("Server is running on port 5000");
})