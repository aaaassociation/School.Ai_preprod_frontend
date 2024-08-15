import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import successImage from '../../assets/images/logo/success.png';
import successBackground from '../../assets/images/all-img/section-bg-7.png';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');
    const amount = query.get('amount');
    const price = query.get('price');
    const email = query.get('email');

    const savePaymentData = async () => {
      try {
        const paymentData = {
          amount: parseInt(amount),
          price: price,
          email: email,
          date: serverTimestamp(),
        };

        if (amount == 5000) {
          paymentData.credits = 1000;
        } else if (amount == 10000) {
          paymentData.credits = 2000;
        } else if (amount == 50000) {
          paymentData.credits = 10000;
        }

        console.log('Saving payment data to Firestore:', paymentData);

        await addDoc(collection(db, 'pricing'), paymentData);

        console.log('Payment data saved successfully');
        // Store session ID in local storage
        localStorage.setItem(sessionId, 'processed');
        // Redirect to courses page after saving data
        navigate('/schoolai/courses');
      } catch (error) {
        console.error('Error saving payment data:', error);
      }
    };

    if (sessionId && amount && price && email) {
      // Check if the session ID has already been processed
      if (!localStorage.getItem(sessionId)) {
        savePaymentData();
      } else {
        console.log('Session ID already processed.');
        navigate('/schoolai/courses');
      }
    }
  }, [location, currentUser, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${successBackground})` }}>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-green-500">Payment Successful!</h1>
        <p className="text-lg mb-6">Thank you for your payment. Your transaction has been completed successfully.</p>
        <div className="flex justify-center mt-4">
          <img src={successImage} alt="Success" className="w-48 h-48" />
        </div>
        <p className="mt-6 text-gray-600">You will be redirected to the courses page shortly...</p>
      </div>
    </div>
  );
};

export default Success;
