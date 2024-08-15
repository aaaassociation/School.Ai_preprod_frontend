import React, { useState, useEffect } from 'react';
import styles from '../../style/FinalViewPage.module.css';
import Header from '../Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const FinalViewPage = ({ prompt, chapters, setContent, content }) => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Generating your course...");
  const [completedChapters, setCompletedChapters] = useState(0);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not signed in");
        window.location.href = "/schoolai/login"; // Redirect to login if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const fetchContent = async (chapterName, subchapterName) => {
    try {
      const response = await fetch('http://137.184.193.15:5000/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          chapter_name: chapterName,
          subchapter_name: subchapterName,
          prompt
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContent(prev => ({
        ...prev,
        [`${chapterName}-${subchapterName}`]: data
      }));
      setCompletedChapters(prev => prev + 1);
    } catch (error) {
      console.error('There was an error fetching the content:', error);
    }
  };

  useEffect(() => {
    if (chapters && userId) {
      const fetchAllContent = async () => {
        const contentPromises = [];
        for (const [chapterName, subchapters] of Object.entries(chapters)) {
          for (const subchapter of subchapters) {
            contentPromises.push(fetchContent(chapterName, subchapter));
          }
        }
        await Promise.all(contentPromises);
        setIsLoading(false);
      };

      fetchAllContent();
    }
  }, [prompt, chapters, setContent, userId]);

  useEffect(() => {
    if (isLoading) {
      const messages = [
        "AI is crafting your unique course...",
        "Analyzing and organizing educational content...",
        "Your course is almost ready...",
        "Generating in-depth subject matter..."
      ];
      let index = 0;
      const interval = setInterval(() => {
        if (completedChapters < Object.keys(chapters).length) {
          setLoadingMessage(`${messages[index]} (${completedChapters}/${Object.keys(chapters).length} chapters completed)`);
        } else {
          setLoadingMessage("All chapters generated. Finalizing your course...");
        }
        index = (index + 1) % messages.length;
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoading, completedChapters, chapters]);

  const handleStartCourse = async () => {
    try {
      const response = await fetch('http://137.184.193.15:5000/save-course-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          input_data: prompt,
          course_outline: chapters,
          course_content: content
        })
      });
      if (!response.ok) {
        throw new Error('Failed to save course data');
      }
      const courseData = await response.json();
      console.log("Course data saved successfully");

      // Navigate to CourseContentPage with the saved course ID
      const courseId = courseData.id; // Assuming the server returns the course ID
      navigate(`/schoolai/coursecontent?courseId=${courseId}`);
    } catch (error) {
      console.error('Error saving course data:', error);
    }
  };

  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const sortChaptersNumerically = (a, b) => {
    return extractNumber(a) - extractNumber(b);
  };

  return (
    <>
      <Header />
      <div
        className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}
        style={{ marginTop: '100px' }}
      >
        <div className={`${styles.container} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <div className={styles.finalViewHeader}>
            <h1 className={`${styles.text4xl} ${styles.fontExtraBold} ${styles.textCenter} ${styles.primaryColor}`}>
              Final View for "{prompt}"
            </h1>
          </div>
          <button
            onClick={handleStartCourse}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4} ${styles.wFull}`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Start Course'}
          </button>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingBaton}></div>
              <p className={styles.loadingText}>{loadingMessage}</p>
            </div>
          ) : (
            <div className={styles.chaptersContainer}>
              {Object.entries(chapters)
                .sort(([a], [b]) => sortChaptersNumerically(a, b))
                .map(([chapterName, subchapters], chapterIndex) => (
                  <div
                    key={chapterIndex}
                    className={`${styles.chapterCard} ${styles.scrollableBox}`}
                  >
                    <img
                      src="../assets/images/all-img/chapter-bg.png"
                      alt="Background"
                      className={styles.backgroundImage}
                    />
                    <div className={styles.overlay}></div>
                    <div className="p-6 relative">
                      <h2 className={`${styles.chapterTitle} ${styles.accentColor}`}>
                        {chapterName}
                      </h2>
                      <div className={styles.subchaptersContainer}>
                        {subchapters
                          .sort((a, b) => sortChaptersNumerically(a, b))
                          .map((subchapter, subchapterIndex) => (
                            <div
                              key={subchapterIndex}
                              className={styles.subchapterCard}
                            >
                              <h3 className={`${styles.subchapterTitle} ${styles.subchapterAccentColor}`}>
                                {`Course ${subchapterIndex + 1}: ${subchapter}`}
                              </h3>
                              <div
                                className={`${styles.subchapterContent} ${styles.courseContent}`}
                                dangerouslySetInnerHTML={{
                                  __html:
                                    content[`${chapterName}-${subchapter}`] ||
                                    '<p>Loading...</p>',
                                }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FinalViewPage;
