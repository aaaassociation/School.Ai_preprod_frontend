import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../style/CourseOutlinePage.module.css';
import Header from '../Header';

const CourseOutlinePage = ({ prompt, setChapters }) => {
  const [outline, setOutline] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchOutline = async (retryCount = 3) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://137.184.193.15:5000/generate-chapters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (typeof data === 'object' && data !== null) {
        for (const [chapterName, subchapters] of Object.entries(data)) {
          if (!Array.isArray(subchapters)) {
            throw new Error(`Subchapters for ${chapterName} are not in a list format`);
          }
        }
        setOutline(data);
        setChapters(data); // Set the chapters state in the parent component
      } else {
        throw new Error('Invalid data format');
      }
      setIsLoading(false);
      console.log("Fetched Outline:", data); // Debug output
    } catch (error) {
      console.error('There was an error fetching the outline:', error);
      if (retryCount > 0) {
        console.log(`Retrying... (${retryCount} attempts left)`);
        setTimeout(() => fetchOutline(retryCount - 1), 10000); // Retry after 10 seconds
      } else {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchOutline();
  }, [prompt, setChapters]);

  const handleNext = () => {
    navigate("/schoolai/finalview"); // Use navigate instead of window.location.href
  };

  const sortedChapters = outline ? Object.entries(outline).sort(([chapterA], [chapterB]) => {
    const chapterNumberA = parseInt(chapterA.match(/\d+/));
    const chapterNumberB = parseInt(chapterB.match(/\d+/));
    return chapterNumberA - chapterNumberB;
  }) : [];

  return (
    <>
      <Header />
      <div className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`} style={{marginTop:"100px"}}>
        <div className={`${styles.container} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <div className={styles.courseOutlineHeader}>
            <h1 className={`${styles.text3xl} ${styles.fontBold} ${styles.textCenter}`}>Course Outline for "{prompt}"</h1>
          </div>
          <div className={styles.courseOutlineContainer}>
            {isLoading ? (
              <div className={styles.loading}>
                <div className={styles.loader}></div>
              </div>
            ) : outline ? (
              <div>
                {sortedChapters.map(([chapterName, subchapters], chapterIndex) => (
                  <div key={chapterIndex} className={styles.chapter}>
                    <h2 className={styles.chapterTitle}>{chapterName}</h2>
                    {subchapters.map((subchapter, subchapterIndex) => (
                      <p key={subchapterIndex} className={styles.subchapter}>Course {subchapterIndex + 1}: {subchapter.replace(/^Subchapter \d+: /, '')}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button onClick={handleNext} className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4} ${styles.wFull}`}>View Final Course</button>
        </div>
      </div>
    </>
  );
};

export default CourseOutlinePage;
