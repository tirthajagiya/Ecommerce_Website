const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
    },
    phone: {
      type: String,
      require: true,
      length: 10,
      //pending
    },
    address: {
      address_line_1: { type: String, require: true, trim: true },
      address_line_2: { type: String, require: false, trim: true },
      city: { type: String, require: true, trim: true },
      state: { type: String, require: true, trim: true },
    },
    userType: {
      type: String,
      require: true,
      enum: ["Admin", "Shopkeeper", "Customer"],
      default: "Customer",
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      default:null
    },
    orderListId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);