import asyncHandler from "express-async-handler";
import Deposit from "../modules/depositModel.js"

// @desc   Create new deposit
// @route  POST /api/deposits
// @access Private
const createDeposit = asyncHandler(async (req, res) => {
  const { amount, paymentMode, proofUrl } = req.body;

  if (!amount || !paymentMode) {
    res.status(400);
    throw new Error("Please provide amount and payment method");
  }

  const deposit = await Deposit.create({
    user: req.user._id,
    amount,
    paymentMode,
    proofUrl,
  });

  res.status(201).json(deposit);
});

// @desc   Get user deposits
// @route  GET /api/deposits
// @access Private
const getUserDeposits = asyncHandler(async (req, res) => {
  const deposits = await Deposit.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(deposits);
});

export { createDeposit, getUserDeposits };
