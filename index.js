import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// connection to the port 
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Connect to MongoDB
mongoose.connect()
.then(()=>console.log('connected to the db'))
.catch((err)=>console.log(err));
