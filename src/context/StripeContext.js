import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_live_51PgodkLzYBSIigWd1S57CKQftKB1QcE2lXGLRGLUVoec9S3RScJ8iGu0ajeo0mwNQeBjUqJg0MpjJmde7PRqtY1B00mrehEmhW'); // Replace with your Stripe publishable key

const StripeContext = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeContext;
