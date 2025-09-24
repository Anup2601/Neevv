import express from "express"
const router=express.Router();
import { protectRoute } from "../Middlewares/auth.middleware.js";
import { createPaymentIntent, verifyPayment } from "../Controllers/payment.controller.js";

router.use(protectRoute);

router.post("/create-payment-intent",createPaymentIntent)
router.post("/verify-payment",verifyPayment)
export default router;