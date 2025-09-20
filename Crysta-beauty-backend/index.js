import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import authMiddleware from './middleware/auth.js';
import jwt from 'jsonwebtoken';    
import orderRouter from './routes/orderRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
app.use(cors({
    origin: '*',
}
))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
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
