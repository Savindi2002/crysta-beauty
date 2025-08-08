import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import itemRouter from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";




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
app.use((req, res, next) => {
    const header = req.header("Authorization");
    if (header != null) {
        return next();}
        const token = header.replace("Bearer ", "");
        jwt.verify(token, "random465", (err, decoded) => {
            if (err) {
                console.log("Invalid token");
                return res.status(403).json({ message: "Invalid token" });
            }
            req.user = decoded;
            next(); // ✅ continue to the route handler
        });
    });




app.use("/student",studentRouter);
app.use("/api/item",itemRouter);
app.use("/api/user",userRouter);



app.listen(5000,
    ()=>{
    console.log("Server is running on port 5000");
})

