import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    categoryId,
    name,
    description,
    image
})

export const Category=mongoose.model("Category",categorySchema);