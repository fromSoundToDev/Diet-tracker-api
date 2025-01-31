import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const register= async (req, res)=>{
    const {userName, email,age, password} = req.body;
    if(!userName || !email || !age || !password){
        return res.status(400).json({msg:"please fill in all fields"});
    }
    const user = {userName, email, age, password:bcryptjs.hashSync(password, 10)};
    try{
        const newUser = await User.create(user);
        newUser.save();
        return res.status(201).json({message:"user created successfully"})
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: "Internal server error"});
    }
}

const login = async (req, res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg:"please fill in all fields"});
    }
    
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
    const isMatch = bcryptjs.compareSync(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"wrong credentials"});
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

    res.cookie("token", token, {
        httpOnly: true,  // Empêche l'accès au cookie via JavaScript (protection XSS)
        secure: false,    // Active uniquement en HTTPS (désactiver en développement)
        sameSite: "Strict", // Protège contre les attaques CSRF
        maxAge: 3600000  // Expire dans 1h (en millisecondes)
      });
    return  res.status(200).json({message:"login successful"});

}

const logout = async (req, res)=>{
    res.clearCookie("token");
    return res.status(200).json({message:"logout successful"});
}




export {register, login, logout};