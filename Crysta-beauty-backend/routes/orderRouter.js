import express from "express";
import {createOrder} from '../controllers/orderController.js';
//import { authenticateToken } from '../middleware/auth.js'; // Import your auth middleware


const orderRouter=express.Router();

orderRouter.post("/",createOrder)

export default orderRouter;
