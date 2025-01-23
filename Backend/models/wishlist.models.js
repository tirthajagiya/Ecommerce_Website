import mongoose from "mongoose"

const wishlistSchema= new mongoose.Schema({
    wishlistId,
    userId,
    items:[]
})

const Wishlist =mongoose.model("Wishlist",wishlistSchema)