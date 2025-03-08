import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import messageRoute from "./Routes/message.route.js"
import cors from "cors"
import { app, server } from "./lib/socket.js";
dotenv.config({ path: "../.env" });
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5174",
    credentials:true,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders:["Content-Type","Authorization"],
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5174");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
// Load environment variables

// Middleware and Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoute);

// Ensure PORT is properly defined
const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log("listing to port: "+ PORT);
    connectDB();
});