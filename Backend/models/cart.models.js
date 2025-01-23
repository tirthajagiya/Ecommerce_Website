import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  _id,
  userId,
  items: [
    {
      productId,
      qulity,
    },
  ],
  totalPrice,
});

const Cart = mongoose.model("Cart", cartSchema);
