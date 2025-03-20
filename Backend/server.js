import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv";
import urlRoutes from "./routes/url.routes.js"
const app=express()
const port =process.env.PORT
app.use(express.json())
dotenv.config();
app.use("/", urlRoutes);   // url routes 
connectDB()
app.listen(port || 5000, () => {
    console.log(`Server is running on https://localhost:${port}`);
  });
  
  
