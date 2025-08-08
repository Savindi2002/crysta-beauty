import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import jwt from "jsonwebtoken";

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

// Token verification middleware for protected routes
function authMiddleware(req, res, next) {
    const header = req.header("Authorization");

    if (!header) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = header.replace("Bearer ", "");
    jwt.verify(token, "random465", (err, decoded) => {
        if (err) {
            console.log("Invalid token");
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = decoded; // Store decoded user info in request
        next();
    });
}

// Public routes (no token needed)
app.use("/api/user", userRouter);

// Protected routes (token required)
app.use("/api/product", authMiddleware, productRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
