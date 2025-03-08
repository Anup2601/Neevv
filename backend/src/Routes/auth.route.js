import express from "express"
import { login, logout, signup } from "../Controllers/auth.controller.js";
import { protectRoute } from "../Middlewares/auth.middleware.js";
import { updateProfile } from "../Controllers/auth.controller.js";
import { checkAuth } from "../Controllers/auth.controller.js";

const router=express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)

router.get("/check",protectRoute,checkAuth)

export default router;