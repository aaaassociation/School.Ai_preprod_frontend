import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../../context/AuthContext';
import pricingImage from '../../assets/images/all-img/section-bg-16.png';

const stripePromise = loadStripe('pk_live_51PgodkLzYBSIigWd1S57CKQftKB1QcE2lXGLRGLUVoec9S3RScJ8iGu0ajeo0mwNQeBjUqJg0MpjJmde7PRqtY1B00mrehEmhW'); // Replace with your Stripe publishable key

const Pricing = () => {
  const { currentUser } = useAuth();

  const handlePayment = async (amount, price) => {
    const stripe = await stripePromise;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, price, email: currentUser.email }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div
      className="pricing-area section-padding bg-cover bg-center flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${pricingImage})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="mini-title text-center text-gray-600 mb-4">Our Pricing</div>
        <h4 className="column-title text-center mb-6 text-2xl font-semibold">
          Choose The Best Plan For Your <span className="shape-bg">Needs</span>
        </h4>
        <div className="mb-8 text-center text-gray-500">
          We offer a variety of pricing plans to suit your needs. Choose the plan that works best for you and start enjoying our services today.
        </div>
        <div className="space-y-8">
          <div className="pricing-group">
            <div className="flex justify-between items-center mb-2">
              <span className="block text-gray-700 font-semibold">$50</span>
              <span className="block text-gray-700 font-semibold">1000 credits</span>
            </div>
            <div className="rounded overflow-hidden bg-gray-200 h-[6px] relative mb-4">
              <div
                className="bg-primary h-[6px] absolute left-0 top-0"
                style={{ width: "10%" }}
              ></div>
            </div>
            <button
              className="btn btn-primary w-full py-2 rounded-md"
              onClick={() => handlePayment(5000, "$50")}
            >
              Pay $50
            </button>
          </div>
          <div className="pricing-group">
            <div className="flex justify-between items-center mb-2">
              <span className="block text-gray-700 font-semibold">$100</span>
              <span className="block text-gray-700 font-semibold">2000 credits</span>
            </div>
            <div className="rounded overflow-hidden bg-gray-200 h-[6px] relative mb-4">
              <div
                className="bg-secondary h-[6px] absolute left-0 top-0"
                style={{ width: "20%" }}
              ></div>
            </div>
            <button
              className="btn btn-primary w-full py-2 rounded-md"
              onClick={() => handlePayment(10000, "$100")}
            >
              Pay $100
            </button>
          </div>
          <div className="pricing-group">
            <div className="flex justify-between items-center mb-2">
              <span className="block text-gray-700 font-semibold">$500</span>
              <span className="block text-gray-700 font-semibold">10000 credits</span>
            </div>
            <div className="rounded overflow-hidden bg-gray-200 h-[6px] relative mb-4">
              <div
                className="bg-tertiary h-[6px] absolute left-0 top-0"
                style={{ width: "100%" }}
              ></div>
            </div>
            <button
              className="btn btn-primary w-full py-2 rounded-md"
              onClick={() => handlePayment(50000, "$500")}
            >
              Pay $500
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
