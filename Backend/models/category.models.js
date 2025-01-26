import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: Number,
      required: true,
      unique:true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
