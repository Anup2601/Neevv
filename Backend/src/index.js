import express from "express";
const app=express();

import authRoutes from "./Routes/auth.route.js"

app.use("/api/auth", authRoutes);

app.get("/",(req,res)=>{
    res.send("Working");
})

app.listen(8080,()=>{
    console.log("listing to port");
})