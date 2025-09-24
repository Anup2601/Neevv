import User from "../models/user.model.js";

export const updateRoleToEducator = async (req, res) => {
    try {

         if (!req.user) {
            console.log("User not found!");
            return res.status(404).json({ message: "User not found" });
        }

        // Update the user's role
        req.user.role = "educator";
        await req.user.save();    

        res.status(200).json({ message: "User role updated successfully", user: req.user });

        return req.user;
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
        console.error("Error in updateRoleToEducator controller:", error.message);
    }
};
