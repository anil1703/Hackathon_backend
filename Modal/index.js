import mongoose from "mongoose";


const product_db = mongoose.Schema({
    ItemId :{
        type: String,
        required: true
        
    },
    Name:{
        type:String,
        required:true
        },
    CategoryId : {
        type: Number,
        required: true
    },
    Price:{
        type:Number,
        required:true
        },
    Quantity:{
        type:Number,
        required:true
    }
})


const ItemDb = mongoose.model("Items",product_db,"Items")
export {ItemDb}


const categoryDb = mongoose.Schema({
    CategoryId:{
        type:String,
        required:true
        },
    Category:{
        type:String,
        required:true
    }
})

const CategoryDb = mongoose.model("Categories",categoryDb)
export {CategoryDb}