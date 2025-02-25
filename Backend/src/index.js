import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import messageRoute from "./Routes/message.route.js"
import cors from "cors"

const app=express();

app.use(express.json());
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
dotenv.config({ path: "../.env" });
// Middleware and Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoute);



app.get("/",(req,res)=>{
    res.send("Working");
})
// Ensure PORT is properly defined
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("listing to port: "+ PORT);
    connectDB();
});