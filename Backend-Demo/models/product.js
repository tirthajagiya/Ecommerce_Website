const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: String,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   // required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    image: 
      {
        type: String,
      },
    // rating: [
    //   {
    //     userId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //     },
    //     rate: {
    //       type: Number,
    //       enum: [1, 2, 3, 4, 5],
    //     },
    //     review: {
    //       type: String,
    //       trim: true,
    //       max: 200,
    //     },
    //   },
    // ],
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   // required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);