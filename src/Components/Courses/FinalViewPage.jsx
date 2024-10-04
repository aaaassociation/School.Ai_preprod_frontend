import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/FinalViewPage.module.css';

const FinalViewPage = ({ prompt, chapters, setContent, content, collectionId, setCollectionId }) => {
  const [userId, setUserId] = useState(null);
  const [subchapterCompletion, setSubchapterCompletion] = useState({});
  const [showSubchapters, setShowSubchapters] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not signed in");
        window.location.href = "/schoolai/login";
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const fetchContent = async (chapterName, subchapterName) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/generate-content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          chapter_name: chapterName,
          subchapter_name: subchapterName,
          prompt,
          voice_id: 'ErXwobaYiN019PkySvjV'
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

      setSubchapterCompletion(prev => {
        const updatedSubchapters = {
          ...prev[chapterName],
          [subchapterName]: true
        };
        return {
          ...prev,
          [chapterName]: updatedSubchapters
        };
      });
    } catch (error) {
      console.error('There was an error fetching the content:', error);
    }
  };

  useEffect(() => {
    if (chapters && userId) {
      const fetchAllContent = async () => {
        for (const [chapterName, subchapters] of Object.entries(chapters)) {
          subchapters.forEach(subchapter => {
            fetchContent(chapterName, subchapter);
          });
        }
      };

      fetchAllContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt, chapters, setContent, userId]);

  const toggleSubchaptersVisibility = (chapterName) => {
    setShowSubchapters(prev => ({
      ...prev,
      [chapterName]: !prev[chapterName]
    }));
  };

  const areAllSubchaptersComplete = (chapterName) => {
    const subchapters = subchapterCompletion[chapterName];
    return subchapters && Object.keys(subchapters).length === chapters[chapterName].length && Object.values(subchapters).every(isComplete => isComplete);
  };

  const handleStartCourse = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/save-course-data`, {
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
      const courseId = courseData.course_data.id;
      setLoading(false);
      setCollectionId("");
      navigate(`/schoolai/coursecontent?courseId=${courseId}`);
    } catch (error) {
      console.error('Error saving course data:', error);
    }
  };

  const handleStartLink = async (chapterName) => {
    const filteredChapter = Object.keys(chapters)
      .filter(key => key.includes(chapterName))
      .reduce((obj, key) => {
        obj[key] = chapters[key];
        return obj;
      }, {});
    const filteredContent = Object.keys(content)
      .filter(key => key.includes(chapterName))
      .reduce((obj, key) => {
        obj[key] = content[key];
        return obj;
      }, {});

    if (!collectionId) {
      const newTab = window.open();
      newTab.document.title = "Loading ...";
      const response = await fetch(`${process.env.REACT_APP_API_URL}/save-course-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          input_data: prompt,
          course_outline: filteredChapter,
          course_content: filteredContent
        })
      });
      if (response.ok) {
        newTab.location.href = `${window.location.origin}/schoolai/coursecontent`;
        const jsonData = await response.json();
        setCollectionId(jsonData.course_data.id);
      }
    } else {
      const newTab = window.open();
      newTab.document.title = "Loading ...";
      const response = await fetch(`${process.env.REACT_APP_API_URL}/save-course-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: collectionId,
          user_id: userId,
          input_data: prompt,
          course_outline: filteredChapter,
          course_content: filteredContent
        })
      });
      if (response.ok) {
        newTab.location.href = `${window.location.origin}/schoolai/coursecontent`;
      }
    }
  }

  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const sortChaptersNumerically = (a, b) => {
    return extractNumber(a) - extractNumber(b);
  };

  return (
    <>
      <div
        className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}
        style={{ marginTop: '100px' }}
      >
        <div className={`${styles.container} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <div className={styles.finalViewHeader}>
            <h1 className={`${styles.text4xl} ${styles.fontExtraBold} ${styles.textCenter} ${styles.primaryColor}`}>
              {prompt}
            </h1>
          </div>
          <div className={styles.chaptersContainer}>
            {Object.entries(chapters)
              .sort(([a], [b]) => sortChaptersNumerically(a, b))
              .map(([chapterName, subchapters], chapterIndex) => (
                <div key={chapterIndex} className={styles.chapterSection}>
                  <div className={styles.chapterHeader}>
                    <h2 className={styles.chapterTitle} >
                      <div
                        onClick={() => { handleStartLink(chapterName) }}
                        className={areAllSubchaptersComplete(chapterName) ? styles.activeLink : styles.disabledLink}
                      >
                        {chapterName}
                      </div>
                      <span className={areAllSubchaptersComplete(chapterName) ? styles.checkmark : styles.loadingSpinner}></span>
                    </h2>
                    <button
                      className={styles.toggleButton}
                      onClick={() => toggleSubchaptersVisibility(chapterName)}
                    >
                      {showSubchapters[chapterName] ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {showSubchapters[chapterName] && (
                    <div className={styles.subchaptersContainer}>
                      {subchapters
                        .sort((a, b) => sortChaptersNumerically(a, b))
                        .map((subchapter, subchapterIndex) => (
                          <div key={subchapterIndex} className={styles.subchapter}>
                            <span>{subchapter}</span>
                            <span className={content[`${chapterName}-${subchapter}`] ? styles.checkmark : styles.loadingSpinner}></span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <button
            onClick={handleStartCourse}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4} ${styles.wFull}`}
            disabled={!Object.keys(chapters).every(areAllSubchaptersComplete)}
          >
            {!loading ? "Start Course" : <div className='flex justify-center items-center'>
              <div className={styles.spinner}></div>
            </div>}
          </button>
        </div>
      </div>
    </>
  );
};

export default FinalViewPage;