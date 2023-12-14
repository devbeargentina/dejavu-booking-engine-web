import React, { useEffect, useState } from 'react';

const PaymentPage = () => {
  const [paymentRequestUrl, setPaymentRequestUrl] = useState('');

  useEffect(() => {
    // Fetch the payment request URL from the server
    const fetchPaymentRequestUrl = async () => {
      try {
        const response = await fetch('https://localhost:7006/api/payments/createPayment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: 100, // Specify the payment amount
            orderId: '123456789', // Specify the unique order ID
          }),
        });
        const data = await response.json();
        setPaymentRequestUrl(data);
      } catch (error) {
        console.error('Error fetching payment request URL:', error);
      }
    };

    fetchPaymentRequestUrl();
  }, []);

  const redirectToCCavenue = () => {
    // Redirect the user to the CCAvenue payment page
    window.location.href = paymentRequestUrl;
  };

  return (
    <div>
      <h1>CCavenue Payment Form</h1>
      {paymentRequestUrl ? (
        <button onClick={redirectToCCavenue}>Proceed to Payment</button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentPage;
