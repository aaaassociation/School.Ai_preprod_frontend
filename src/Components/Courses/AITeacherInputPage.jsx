import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/AITeacherInputPage.module.css';
import Header from '../Header';

const AITeacherInputPage = ({ setPrompt }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const db = getFirestore();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AITeacherInputPage rendered");

    // Get the current user's UID and email
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setUserEmail(user.email);
      } else {
        console.log("User not signed in");
        navigate("/schoolai/login"); // Redirect to login if user is not authenticated
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSubmit = async () => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    setLoading(true);
    setPrompt(input); // Set the prompt here

    // Save user input and usage data to Firestore
    try {
      console.log("Saving user input to Firestore");
      const inputRef = await addDoc(collection(db, "user_inputs"), {
        user_id: userId,
        prompt: input,
        input_data: input,
        timestamp: new Date()
      });

      console.log("User input saved successfully");

      console.log("Saving usage data to Firestore");
      const usageRef = await addDoc(collection(db, "usage"), {
        user_id: userId,
        email: userEmail,
        used_credit: 100,
        date: new Date()
      });

      console.log("Usage data saved successfully");

      navigate("/schoolai/courseoutline"); // Use navigate instead of window.location.href
    } catch (error) {
      console.error('Error saving data:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}>
        <div className={`${styles.container} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <h1 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb6} ${styles.textCenter}`}>What do you want to learn?</h1>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to learn..."
            rows="5"
            className={`${styles.wFull} ${styles.p4} ${styles.border} ${styles.roundedMd} ${styles.focusOutlineNone} ${styles.focusRing2} ${styles.focusRingPrimary}`}
          />
          <button onClick={handleSubmit} disabled={loading} className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4} ${styles.wFull}`}>
            {loading ? <div className={styles.spinner}></div> : 'Start AI Teacher Course'}
          </button>
        </div>
      </div>
    </>
  );
};

export default AITeacherInputPage;
