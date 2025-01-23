import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
        _id,
        productname,
        description,
        category,
        price,
        discount,
        stock,
        images:[],
        rating,
        owner
})

export const Product=mongoose.model("Product",productSchema);