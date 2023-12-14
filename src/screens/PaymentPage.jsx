import { useEffect } from "react";
import axios from "axios";
import { createPayment, completePayment } from "../redux/cartSice";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../assets/images/web/Logo-white.png";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PaymentPage = (props) => {
  console.log(`PaymentPage`, props);
  const navigate = useNavigate();
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load...");
      return;
    }
  }

  const handleRazorpayPayment = async () => {
    const data = {
      // Pass payment details such as amount, currency, etc.
      amount: 1000, // Example amount in paise (10 INR)
      currency: "INR",
      description: "Example Payment",
      name: "string",
      email: "string",
      phoneNumber: "string",
      address: "string",
    };
    // here anything extra can be passed while creating an order
    const response = await axios.post(
      `https://localhost:7006/api/ccpayments/createpayment`,
      data
    );

    fetch("https://localhost:7006/api/ccpayments/createpayment", {
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
          const options = {
            key: data.razorpayKey,
            amount: data.amount,
            currency: "INR",
            name: "Deja-vu tours treks and travel",
            description: "Package name",
            image: "https://www.dejavutours.in/img/deja-vu%20icon.png",
            order_id: data.orderId,
            handler: (response1) => {
              debugger;
              console.log(response1);
              // axios
              //   .post(`api/payment/confirm`, response)
              //   .then((response) => alert(response.data))
              //   .catch((err) => console.log(err));
            },
            prefill: {
              name: "TESTUSER",
              email: "testuser@mail.com",
            },
            theme: {
              color: "#073763",
            },
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        } else {
          console.error("Failed to create order:", data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to create order:", error);
      });
    // const order_id = response.data.orderId;
    // debugger;
    // const options = {
    //   key: response.data.razorpayKey,
    //   amount: response.data.amount,
    //   currency: "INR",
    //   name: "Your javascript client app",
    //   description: "Pro Membership",
    //   //image: "/your_logo.png",
    //   order_id: order_id,
    //   handler: (response1) => {
    //     debugger;
    //     console.log(response1);
    //     // axios
    //     //   .post(`api/payment/confirm`, response)
    //     //   .then((response) => alert(response.data))
    //     //   .catch((err) => console.log(err));
    //   },
    //   // prefill: {
    //   //   name: "TESTUSER",
    //   //   email: "testuser@mail.com",
    //   // },
    //   // theme: {
    //   //   color: "#F37254",
    //   // },
    // };
    // const rzp1 = new window.Razorpay(options);
    // rzp1.open();
  };
  // Create a new instance of Razorpay client
  // const Razorpay = new Razorpay({
  //   key_id: "rzp_test_sCH1qhVqMIfKAc",
  //   key_secret: "YGklRpVHIBxgqXEUsVSZe3Zu",
  // });
  useEffect(() => {
    displayRazorpay();
  }, []);
  return (
    <div>
      <button onClick={() => handleRazorpayPayment()}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
