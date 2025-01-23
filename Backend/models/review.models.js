import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewId,
  productId,
  userId,
  rating,
  comment,
});

const Review = mongoose.model("Review", reviewSchema);