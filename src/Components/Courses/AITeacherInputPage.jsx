import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/AITeacherInputPage.module.css';
import Header from '../Header';

const AITeacherInputPage = ({ setPrompt }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [chapters, setChapters] = useState(1);
  const [chapterDepth, setChapterDepth] = useState(1);
  const [illustrations, setIllustrations] = useState({
    images: false,
    videos: false,
    aiTeacher: false,
  });
  const [expectedCredits, setExpectedCredits] = useState(50); // Initial base credits
  const [userCredits, setUserCredits] = useState(0); // Track user's credits

  const db = getFirestore();
  const auth = getAuth();
  const navigate = useNavigate();

  // Weights for each feature
  const WEIGHTS = {
    chapter: 5, // Weight for each chapter
    chapterDepth: 5, // Weight for chapter depth
    images: 20,
    videos: 30,
    aiTeacher: 50,
  };

  useEffect(() => {
    console.log("AITeacherInputPage rendered");

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        setUserEmail(user.email);

        // Fetch user's credits from Firestore
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserCredits(userDoc.data().credits);
        } else {
          console.log("No such user!");
        }
      } else {
        console.log("User not signed in");
        navigate("/schoolai/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate, db]);

  useEffect(() => {
    // Calculate expected credits based on user input
    let credits = 50; // Base cost

    // Apply weight of 5 * number of chapters for the chapters
    credits += chapters * WEIGHTS.chapter * chapters;

    // Apply weight of 5 for chapter depth
    credits += chapterDepth * WEIGHTS.chapterDepth;

    if (illustrations.images) credits += WEIGHTS.images;
    if (illustrations.videos) credits += WEIGHTS.videos;
    if (illustrations.aiTeacher) credits += WEIGHTS.aiTeacher;

    setExpectedCredits(credits);
  }, [chapters, chapterDepth, illustrations]);

  const handleIllustrationsChange = (e) => {
    setIllustrations({ ...illustrations, [e.target.name]: e.target.checked });
  };

  const incrementChapters = () => setChapters(chapters + 1);
  const decrementChapters = () => chapters > 1 && setChapters(chapters - 1);

  const incrementChapterDepth = () => setChapterDepth(chapterDepth + 1);
  const decrementChapterDepth = () => chapterDepth > 1 && setChapterDepth(chapterDepth - 1);

  const handleSubmit = async () => {
    if (!userId) {
      console.error('No user ID available');
      return;
    }

    if (userCredits < expectedCredits) {
      alert("Not enough credits to generate this course.");
      return;
    }

    setLoading(true);
    setPrompt(input);

    try {
      console.log("Saving user input to Firestore");

      // Deduct the expected credits from the user's account
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        credits: userCredits - expectedCredits,
      });

      // Save user input to Firestore
      const inputRef = await addDoc(collection(db, "user_inputs"), {
        user_id: userId,
        prompt: input,
        chapters,
        chapterDepth,
        illustrations,
        input_data: input,
        timestamp: new Date()
      });

      console.log("User input saved successfully");

      console.log("Saving usage data to Firestore");
      const usageRef = await addDoc(collection(db, "usage"), {
        user_id: userId,
        email: userEmail,
        used_credit: expectedCredits,
        date: new Date()
      });

      console.log("Usage data saved successfully");

      navigate("/schoolai/courseoutline", {
        state: { prompt: input, chapters, chapterDepth, illustrations },
      });
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
          
          {/* Pink Background Section */}
          <div className={`${styles.pinkBackground} ${styles.rounded} ${styles.p4} ${styles.mt6}`}>
            <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween} ${styles.mb4}`}>
              <label htmlFor="chapters">Chapters:</label>
              <div className={styles.numberInputContainer}>
                <button onClick={decrementChapters} className={styles.numberButton}>-</button>
                <span className={styles.numberText}>{chapters}</span>
                <button onClick={incrementChapters} className={styles.numberButton}>+</button>
              </div>
            </div>

            <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween} ${styles.mb4}`}>
              <label htmlFor="chapterDepth">Chapters Depth:</label>
              <div className={styles.numberInputContainer}>
                <button onClick={decrementChapterDepth} className={styles.numberButton}>-</button>
                <span className={styles.numberText}>{chapterDepth}</span>
                <button onClick={incrementChapterDepth} className={styles.numberButton}>+</button>
              </div>
            </div>

            <div className={`${styles.mb4}`}>
              <label>Illustrations:</label>
              <div className={`${styles.flex} ${styles.flexColumn} ${styles.ml2}`}>
                <label>
                  <input
                    type="checkbox"
                    name="images"
                    checked={illustrations.images}
                    onChange={handleIllustrationsChange}
                  /> Images
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="videos"
                    checked={illustrations.videos}
                    onChange={handleIllustrationsChange}
                  /> Videos
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="aiTeacher"
                    checked={illustrations.aiTeacher}
                    onChange={handleIllustrationsChange}
                  /> AI Teacher
                </label>
              </div>
            </div>

            <p className={`${styles.textCenter} ${styles.fontBold}`}>Estimated Cost: {expectedCredits} Credits</p>
            <button onClick={handleSubmit} disabled={loading} className={`${styles.btn} ${styles.btnPrimary} ${styles.wFull} ${styles.mt4}`}>
              {loading ? <div className={styles.spinner}></div> : 'Generate'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITeacherInputPage;
