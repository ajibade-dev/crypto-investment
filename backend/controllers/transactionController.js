// controllers/transactionController.js
import Deposit from "../modules/depositModel.js";

export const getRecentTransactions = async (req, res) => {
  try {
    const userId = req.user && req.user._id;
    if (!userId) return res.status(401).json({ message: "Not authorized" });

    // Fetch deposits
    const deposits = await Deposit.find({ user: userId })
      .select("amount paymentMode status createdAt")
      .lean();

    // Try to import a Withdraw model if it exists; otherwise fallback to empty
    let withdrawals = [];
    try {
      const { default: Withdraw } = await import("../modules/withdrawModel.js");
      withdrawals = await Withdraw.find({ user: userId })
        .select("amount paymentMode status createdAt")
        .lean();
    } catch (err) {
      // no withdraw model or it failed to import — that's fine
      withdrawals = [];
    }

    // add type field and combine
    const combined = [
      ...deposits.map((d) => ({ ...d, type: "Deposit" })),
      ...withdrawals.map((w) => ({ ...w, type: "Withdrawal" })),
    ];

    // sort newest first and limit to 5
    combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const recent = combined.slice(0, 5);

    res.json(recent);
  } catch (error) {
    console.error("getRecentTransactions error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
