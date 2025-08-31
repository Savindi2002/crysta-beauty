import express from "express";
import {createOrder, getOrders} from '../controllers/orderController.js';
//import { authenticateToken } from '../middleware/auth.js'; // Import your auth middleware


const orderRouter=express.Router();

orderRouter.post("/",createOrder)
orderRouter.get("/",getOrders)
export default orderRouter;
