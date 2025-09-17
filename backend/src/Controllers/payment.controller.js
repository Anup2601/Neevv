import Razorpay from "razorpay";
import crypto from "crypto";
import Payment from "../models/payment.model.js";
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export const createPaymentIntent=async(req,res)=>{
    try {
        const { amount} = req.body;
        const options = {
            amount: amount * 100,  // Convert to paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const verifyPayment=async(req,res)=>{
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const verifySignature = (orderId, paymentId, signature) => {
            const generatedSignature = crypto
                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                .update(orderId + "|" + paymentId)
                .digest("hex");
            return generatedSignature === signature;
        };
        const isValid = verifySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature);
        if (!isValid) {
            return res.status(400).json({ success: false, message: "Invalid signature" });
        }
        // Save payment details to the database
        const payment = new Payment({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });
        await payment.save();
        res.status(200).json({ success: true, message: "Payment verified successfully" });
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
