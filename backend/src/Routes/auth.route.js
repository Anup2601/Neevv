import express from "express"
import { login, logout, signup } from "../Controllers/auth.controller.js";
import { protectRoute } from "../Middlewares/auth.middleware.js";
import { updateProfile } from "../Controllers/auth.controller.js";
import { checkAuth } from "../Controllers/auth.controller.js";
import { generateToken } from "../lib/utils.js";
import passport from "../lib/passport.js";

const router=express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)

// Start Google login
router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

// Callback after Google login
router.get("/google/callback",
    passport.authenticate("google",{failureRedirect:"/login",
        session: false 
    }),
    (req,res)=>{
        const token = generateToken(req.user._id,res);

        res.redirect(process.env.NODE_ENV === "development"
                ? "http://localhost:5173/home"
                : "https://neevv.tech/home");
});

export default router;