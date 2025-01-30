import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true, 'please enter your name'],
        trim:true,
    },
    email:{
        type:String,
        required:[true,'please enter your email'],
        unique:true,
        trim:true,
    },
    age:{
        type:Number,
        required:[true,'please enter your age'],
        trim:true,
        Min:12
    },
    password:{
        required:[true,'please enter your password'],
        type:String,
        unique:true,
    },
    
},
{
    timestamps:true,
});

const User = mongoose.model('User',userShema);
export default User;