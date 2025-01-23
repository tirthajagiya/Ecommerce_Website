import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    _id,
    username,
    email,
    password,
    phone,
    address, //street,road,state,country
    cart:[
        {
            productId,
            quntity
        },
    ],
    orderList:[]
})

export const User=mongoose.model("User",userSchema);