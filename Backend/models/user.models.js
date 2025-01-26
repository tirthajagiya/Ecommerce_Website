import mongoose, { Mongoose } from "mongoose";

const addressSchema = new mongoose.model({
  street: { type: String, require: true, trim: true },
  road: { type: String, require: false, trim: true },
  state: { type: String, require: true, trim: true },
  country: { type: String, require: true, trim: true },
});

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
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
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phone: {
    type: String,
    require: true,
  },
  address: addressSchema,
  userType: {
    type: String,
    require: true,
    enum: ["Admin", "Customer"],
    default: "Customer",
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  orderList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
},{timestamps:true});

export const User = mongoose.model("User", userSchema);
