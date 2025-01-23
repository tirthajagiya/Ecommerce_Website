import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId,
  userId,
  items: [
    {
      productId,
      quntity,
      price,
    },
  ],
  totalAmount,
  status,
  shippingAddress: {},
});

const Order = mongoose.model("Order", orderSchema);
