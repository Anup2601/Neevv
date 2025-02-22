import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import messageRoute from "./Routes/message.route.js"
const app=express();

app.use(express.json());
app.use(cookieParser());
// Load environment variables
dotenv.config({ path: "../.env" });
// Middleware and Routes
app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoute);

app.get("/",(req,res)=>{
    res.send("Working");
})
// Ensure PORT is properly defined
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("listing to port: "+ PORT);
    connectDB();
});