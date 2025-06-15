import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
} from "../controllers/orderController.js";

import { admin, protect } from "../middleware/authMiddleware.js";

// Create new order or get all orders (admin only)
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);

// Get current user's orders
router.route("/mine").get(protect, getMyOrders);

// Get a single order by ID
router.route("/:id").get(protect, getOrderById);

// Mark as paid
router.route("/:id/pay").put(protect, updateOrderToPaid);

// Mark as delivered
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
