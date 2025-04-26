import mongoose, { mongo } from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productID : {
        type : mongoose.Schema.ObjectId,
        ref : 'product'
    },
    quantity : {
        type : Number,
        default : 1
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
},{
    timestamps : true
})

const CartProductModel = mongoose.Schema("cartProduct", cartProductSchema)

export default CartProductModel