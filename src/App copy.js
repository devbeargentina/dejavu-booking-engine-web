import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
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

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleRazorpayPayment = () => {
    const data = {
      // Pass payment details such as amount, currency, etc.
      amount: 1000, // Example amount in paise (10 INR)
      currency: "INR",
      description: "Example Payment",
      name: "string",
      email: "string",
      phoneNumber: "string",
      address: "string",
    }; // here anything extra can be passed while creating an order
    // const response = axios.post(
    //   `https://localhost:7006/api/payments/process-merchant-order`,
    //   data
    // );
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
        if (data.orderId) {
          const order_id = data.orderId;
          const options = {
            key: data.razorpayKey,
            amount: data.amount,
            currency: "INR",
            name: "Your javascript client app",
            description: "Pro Membership",
            //image: "/your_logo.png",
            order_id: order_id,
            handler: (response1) => {
              debugger;
              console.log(response1);
              // axios
              //   .post(`api/payment/confirm`, response)
              //   .then((response) => alert(response.data))
              //   .catch((err) => console.log(err));
            },
            // prefill: {
            //   name: "TESTUSER",
            //   email: "testuser@mail.com",
            // },
            // theme: {
            //   color: "#F37254",
            // },
          };
          let idd = true;
          debugger;
          if (isOpen) {
            debugger;
            setIsOpen(false);
            setTimeout(() => {
              const rzp1 = new window.Razorpay(options);
              rzp1.open();
            }, 500);
          }
        } else {
          console.error("Failed to create order:", data.message);
        }
      })
      .catch((error) => {
        console.error("Failed to create order:", error);
      });
  };
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load...");
      return;
    }
  }
  // Create a new instance of Razorpay client
  // const Razorpay = new Razorpay({
  //   key_id: "rzp_test_sCH1qhVqMIfKAc",
  //   key_secret: "YGklRpVHIBxgqXEUsVSZe3Zu",
  // });
  useEffect(() => {
    displayRazorpay();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleRazorpayPayment()}>Pay Now</button>
      </header>
    </div>
  );
};

export default App;
