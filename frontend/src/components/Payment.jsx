import { useState } from "react";
import { axiosInstanace } from "../lib/axios";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      // Step 1: Create order on backend
      const { data } = await axiosInstanace.post("/payment/create-payment-intent", {
        amount: Number(amount),
      });

      if (!data.success) {
        alert("Failed to create order");
        return;
      }

      const { id: order_id, amount: orderAmount, currency } = data.order;

      // Step 2: Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // frontend key (test mode key from Razorpay dashboard)
        amount: orderAmount,
        currency,
        name: "My App",
        description: "Test Transaction",
        order_id,
        handler: async function (response) {
          // Step 3: Send payment details to backend for verification
          try {
            const verifyRes = await axiosInstanace.post(
              "/payment/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`, // if using JWT protectRoute
                },
              }
            );

            if (verifyRes.data.success) {
              alert("✅ Payment Verified Successfully!");
            } else {
              alert("❌ Payment Verification Failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Error verifying payment");
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-xl font-bold">Pay with Razorpay</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in INR"
        className="border px-3 py-2 rounded-md"
      />
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;