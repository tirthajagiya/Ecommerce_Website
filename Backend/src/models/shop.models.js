import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Name: {
      type: String,
      length: 20,
    },
    Discription: {
      type: String,
      maxlength: 200,
    },
    Logo: {
      type: String,
      trim: true,
    },
    email: [
      {
        type: String,
      },
    ],
    Contact_Number: [
      {
        type: String,
      },
    ],
    Established_Date: {
      type: String,
    },
    rating: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rate: {
          type: Number,
          enum: [1, 2, 3, 4, 5],
        },
        review: {
          type: String,
          trim: true,
          max: 200,
        },
      },
    ],
    Location: {
      type: String,
    },
    GSTNumber: {
      type: String,
      trim: true,
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

export const Shop = mongoose.model("Shop", shopSchema);
