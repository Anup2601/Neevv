import { mongoose } from "mongoose";
import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import { getReceiverSocket, io } from "../lib/socket.js";

export const getUsersForSlidebar = async(req,res) =>{
    try {
        // console.log("🔹 Requesting Users for Sidebar...");
        // console.log("🔍 Logged-in User ID:", req.user?._id);

        if (!req.user) {
            console.warn("⚠️ req.user is undefined!");
            return res.status(401).json({ message: "Unauthorized: No user info" });
          }
          
        const loggedInUserId=req.user._id;
        const filteredUsers= await User.find({_id:{$ne : loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSlidebar controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const getMessages =async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        // console.log("Received user ID:", userToChatId);
        const myId= req.user._id;
        if(!mongoose.Types.ObjectId.isValid(userToChatId)){
            return res.status(400).json({message:"Invalid User ID"});
        }
        if (!userToChatId || userToChatId === "users") {
            console.error("❌ Invalid user ID:", userToChatId);
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const message=await Message.find({
            $or: [
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId},
            ],
        })
        res.status(200).json(message);
    } catch (error) {
        console.log("Error in getMessages controller:-",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const sendMessage = async (req,res) => {
    try {
        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse= await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }

        const newMessage= new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        });

        await newMessage.save();

        // socket.io work
        const receiverSocketId= getReceiverSocket(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}