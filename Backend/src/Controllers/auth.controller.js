import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";

export const signup= async (req,res)=>{
    const {fullName,email,password}=req.body;
    try {
        if(password.length<6){
            return res.status(400).json({message:"Password Must be at least 6 characters"})
        }
        const user=await User.findOne({email});
        if (user) return req.status(400).json({message:"User already exists"});
        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            fullName,
            email,
            password:hashPassword,
        })
        if(newUser){
            return res.status(400).json({message:"User already exist"});
        }
        else{
            return res.status(400).json({message:"Invalid User data"});
        }

    } catch (error) {
        
    }
};

export const  login=(req,res)=>{
    res.send("signup route")
};

export const logout=(req,res)=>{
    res.send("signup route")
};