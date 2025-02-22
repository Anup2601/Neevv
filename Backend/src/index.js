import express from "express";
import dotenv from "dotenv";
const app=express();

import authRoutes from "./Routes/auth.route.js"
import { connectDB } from "./lib/db.js";

app.use(express.json());

// Load environment variables
dotenv.config({ path: "../.env" });
// Middleware and Routes
app.use("/api/auth", authRoutes);

app.get("/",(req,res)=>{
    res.send("Working");
})
// Ensure PORT is properly defined
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("listing to port: "+ PORT);
    connectDB();
});