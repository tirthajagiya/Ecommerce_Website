import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: String,
  },
  productname: {
    type: String,
    required: String,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  rating: [
    {
      user: {
        type: mongoose.Schema.model.ObjectId,
        ref: "User",
      },
      rate: {
        type: Number,
        min: 1,
        max: 5,
      },
      review:{
        type:String,
        trim:true,
      }
    },
  ],
  owner: {
    type: mongoose.Schema.model.ObjectId,
    ref: "User",
    required: true,
  },
},{timestamps:true});

export const Product = mongoose.model("Product", productSchema);
