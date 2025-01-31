import dietModel from "../models/diet.model.js";

const singleDiet = async (req,res)=>{
const  dietId = req.params.id;

    try{
        const diet = await dietModel.findOne({  _id:dietId});
        if(!diet){
            return res.status(404).json({message:"diet not found"});
        }
        return res.status(200).json({diet});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

// create a diet
const createDiet = async (req,res)=>{
   
    const {name,calories,protein,carbs,fat}= req.body;
    if(!name || !calories || !protein || !carbs || !fat){
        return res.status(400).json({message:"please fill in all fields"});
    }
    const diet = {name,calories,protein,carbs,fat};
    console.log(diet);
    try{
        const newDiet = await dietModel.create(diet);
        newDiet.save();
        return res.status(201).json({message:"diet created successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

// update diet
const updateDiet = async (req,res)=>{
    const dietId = req.params.id;
    const {name,calories,protein,carbs,fat}= req.body;
    if(!name || !calories || !protein || !carbs || !fat){
        return res.status(400).json({message:"please fill in all fields"});
    }
    const diet = {name,calories,protein,carbs,fat};
    try{
        const updatedDiet = await dietModel.findByIdAndUpdate(dietId,diet,{new:true});
        return res.status(200).json({message:"diet updated successfully",updatedDiet});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

// delete diet
const deleteDiet = async (req,res)=>{
    const dietId = req.params.id;
    try{
        await dietModel.findByIdAndDelete(dietId);
        return res.status(200).json({message:"diet deleted successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

// all diets
const allDiets = async (req,res)=>{
    try{
        const diets = await dietModel.find();
        return res.status(200).json({diets});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"internal server error"});
    }
}

export {singleDiet, createDiet, updateDiet, deleteDiet, allDiets};