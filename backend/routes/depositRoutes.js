import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createDeposit,
  getUserDeposits,
} from "../controllers/depositController.js";

const router = express.Router();

// POST /api/deposits -> create a deposit
router.post("/", protect, createDeposit);

// GET /api/deposits -> get all deposits for logged-in user
router.get("/", protect, getUserDeposits);

export default router;
