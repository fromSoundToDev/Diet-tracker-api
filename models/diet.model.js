import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'food name is required'],
        unique:true

    },
    calories:{
        required:[true,'calories is required'],
        type:Number,
        
    },
    protein:{
        required:[true,'proteine is required'],
        type:Number
    },
    carbs:{
        required:[true,'carbs is required'],
        type:Number
    },
    fat:{
        required:[true,'fats is required'],
        type:Number
    }


},{timestamps:true});

export default mongoose.model('Diet',dietSchema);