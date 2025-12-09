import express from "express";
import {
  allOrder,
  placeOrder,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/Auth.js";

const orderRouter = express.Router();

// admin features
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

// payment features

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// user feature

orderRouter.post("/userOrders", authUser, userOrders);

// verify payment

orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
