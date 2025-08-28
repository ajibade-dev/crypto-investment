import mongoose from "mongoose";

const depositSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // links deposit to a user
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
     enum: ["USDT", "USDC", "BTC", "ETH", "USDT-ERC20", "USDT-TRC20", "USDC-ERC20", "USDC-TRC20","USDC-SOL"], // or whatever options you support
      required: true,
    },
    proofUrl: {
      type: String, // Cloudinary link
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

const Deposit = mongoose.model("Deposit", depositSchema);
export default Deposit;
