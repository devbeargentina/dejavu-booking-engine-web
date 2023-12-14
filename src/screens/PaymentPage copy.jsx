import React, { useState } from "react";
import RazorpayCheckout from "razorpay-checkout";

const PaymentPage = () => {
  const [orderId, setOrderId] = useState(""); // State to store order ID

  // Handle payment success callback
  const handlePaymentSuccess = (paymentId) => {
    // Call the Web API to verify payment
    fetch(`/api/payment/verify/${paymentId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Payment is successful, perform appropriate actions
          alert("Payment successful!");
        } else {
          // Payment failed, perform appropriate actions
          alert("Payment failed.");
        }
      })
      .catch((error) => {
        console.error("Failed to verify payment:", error);
      });
  };

  // Handle payment error callback
  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
  };

  // Function to initiate payment
  const handlePayment = () => {
    // Call the Web API to create an order
    fetch("https://localhost:7006/api/payments/process-merchant-order", {
      //"/api/payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Pass payment details such as amount, currency, etc.
        amount: 1000, // Example amount in paise (10 INR)
        currency: "INR",
        description: "Example Payment",
        name: "string",
        email: "string",
        phoneNumber: "string",
        address: "string",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        debugger;
        if (data.orderId) {
          // Set the order ID received from the Web API
          setOrderId(data.orderId);

          // Create Razorpay instance
          const razorpay = new RazorpayCheckout({
            key: data.razorpayKey,
            order_id: data.orderId,
            handler: handlePaymentSuccess,
            modal: {
              ondismiss: handlePaymentError,
            },
          });

          // Open the Razorpay payment page
          razorpay.open();
        } else {
          console.error("Failed to create order:", data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to create order:", error);
      });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
