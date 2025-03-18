const mongoose = require("mongoose");
  
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Deliverd", "Processing"],
      default: "Pending",
    },
    shippingAddress: {
      address_line_1: { type: String, require: true, trim: true },
      address_line_2: { type: String, require: false, trim: true },
      city: { type: String, require: true, trim: true },
      state: { type: String, require: true, trim: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
