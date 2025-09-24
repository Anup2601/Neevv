import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import messageRoute from "./Routes/message.route.js"
import cors from "cors"
import path from "path";
import { app, server } from "./lib/socket.js";
import paymentRoute from "./Routes/payment.route.js"
import educatorRoute from "./Routes/educator.route.js"
dotenv.config({ path: "../.env" });
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders:["Content-Type","Authorization"],
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
// Load environment variables

// Middleware and Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoute);
app.use("/api/payment",paymentRoute);
app.use("/api/educator",educatorRoute);

// Ensure PORT is properly defined
const PORT=process.env.PORT || 5000;
const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

server.listen(PORT,()=>{
    console.log("listing to port: "+ PORT);
    connectDB();
});
