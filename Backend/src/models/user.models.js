import mongoose from "mongoose";

const addressSchema = new mongoose.model({
  street: { type: String, require: true, trim: true },
  road: { type: String, require: false, trim: true },
  state: { type: String, require: true, trim: true },
  country: { type: String, require: true, trim: true },
});

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
    address: addressSchema,
    userType: {
      type: String,
      require: true,
      enum: ["Admin", "Shopkeeper", "Customer"],
      default: "Customer",
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
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

export const User = mongoose.model("User", userSchema);
