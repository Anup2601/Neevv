import { generateToken } from "../lib/utils.js";
import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";

export const signup= async (req,res)=>{
    const {fullName,email,password}=req.body;
    try {
        if(!fullName ||!email ||  !password){
            return res.status(400).json({message:"All Fields are required"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Password Must be at least 6 characters"})
        }
        const user=await User.findOne({email});
        if (user) return res.status(400).json({message:"User already exists"});
        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            fullName,
            email,
            password:hashPassword,
        })
        if(newUser){
            // generate JWT Token
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(200).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,
            });
        }
        else{
            return res.status(400).json({message:"Invalid User data"});
        }

    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const  login=(req,res)=>{
    res.send("signup route")
};

export const logout=(req,res)=>{
    res.send("signup route")
};