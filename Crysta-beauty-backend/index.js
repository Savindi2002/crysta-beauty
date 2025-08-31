import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import authMiddleware from './middleware/auth.js';
import jwt from 'jsonwebtoken';    
import orderRouter from './routes/orderRouter.js';

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:123@cluster0.qqmhplg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(() => {
        console.log("Connection failed");
    });

app.use(bodyParser.json());


// Public routes (no token needed)
app.use("/api/user", userRouter);

// Protected routes (token required)
app.use("/api/product", productRouter);

app.use("/api/order",authMiddleware,orderRouter)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
