const mongoose = require('mongoose')
const addressSchema = require('User');

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
    shippingAddress: addressSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);