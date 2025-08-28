// routes/transactionRoutes.js
import express from "express";
import { getRecentTransactions } from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/recent", protect, getRecentTransactions);

export default router;
