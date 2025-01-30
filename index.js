import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());

// connection to the port 
const port = process.env.port || 3000;
const mongoConnect = process.env.MONGO_URI;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Connect to MongoDB
mongoose.connect(mongoConnect)
.then(()=>console.log('connected to the db'))
.catch((err)=>console.log(err));

// app routes
app.use('/api/v1/auth', authRouter);