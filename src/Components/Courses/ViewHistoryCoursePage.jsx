import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import styles from '../../style/CourseContentPage.module.css';
import Header from '../Header';

const ViewHistoryCoursePage = () => {
  const { courseTitle } = useParams();
  const [prompt, setPrompt] = useState('');
  const [chapters, setChapters] = useState({});
  const [content, setContent] = useState({});
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentSubchapterIndex, setCurrentSubchapterIndex] = useState(0);
  const [detailedContent, setDetailedContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not signed in");
        window.location.href = "/schoolai/login"; // Redirect to login if user is not authenticated
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        const courseQuery = query(
          collection(db, 'course_data'),
          where('user_id', '==', userId),
          where('input_data', '==', decodeURIComponent(courseTitle))
        );
        const querySnapshot = await getDocs(courseQuery);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setPrompt(data.input_data);
          setChapters(JSON.parse(data.course_outline));
          setContent(JSON.parse(data.course_content));
          setIsLoading(false);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [userId, courseTitle]);

  if (isLoading) return <div className={styles.loading}><div className={styles.loader}></div></div>;

  const parseContent = (content) => {
    const contentElements = content.split('\n').filter(Boolean).map(line => {
      if (line.startsWith('<<Concept>>')) {
        return { type: 'concept', text: line.replace('<<Concept>>', '').trim() };
      }
      if (line.startsWith('<<Title>>')) {
        return { type: 'title', text: line.replace('<<Title>>', '').trim() };
      }
      if (line.startsWith('<<Subheading>>')) {
        return { type: 'subheading', text: line.replace('<<Subheading>>', '').trim() };
      }
      if (line.startsWith('<<Emphasis>>')) {
        return { type: 'emphasis', text: line.replace(/<<Emphasis>>/g, '').trim() };
      }
      if (line.startsWith('<<Code>>')) {
        return { type: 'code', text: line.replace('<<Code>>', '').trim() };
      }
      if (line.startsWith('<<Image:URL>>')) {
        return { type: 'image', url: line.replace('<<Image:URL>>', '').trim() };
      }
      return { type: 'paragraph', text: line };
    });
    return contentElements;
  };

  const renderContent = (parsedContent) => {
    return parsedContent.map((element, index) => {
      switch (element.type) {
        case 'title':
          return <h3 key={index} className={styles.title}>{element.text}</h3>;
        case 'subheading':
          return <h4 key={index} className={styles.subheading}>{element.text}</h4>;
        case 'concept':
          return <blockquote key={index} className={styles.concept}><em>{element.text}</em></blockquote>;
        case 'emphasis':
          return <p key={index} className={styles.emphasis}><em>{element.text}</em></p>;
        case 'code':
          return (
            <pre key={index} className={styles.code}>
              <code>{element.text}</code>
            </pre>
          );
        case 'image':
          return <img key={index} src={element.url} alt="Related visual content" className={styles.image} />;
        case 'paragraph':
        default:
          return <p key={index} className={styles.paragraph}>{element.text}</p>;
      }
    });
  };

  const chapterNames = Object.keys(chapters).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });
  const currentChapterName = chapterNames[currentChapterIndex];
  const subchapters = chapters[currentChapterName].map(subchapter => subchapter.replace(/^Subchapter \d+: /, ''));
  const currentSubchapter = subchapters[currentSubchapterIndex];
  const parsedContent = parseContent(content[`${currentChapterName}-${currentSubchapter}`] || '');

  const handleNext = () => {
    if (currentSubchapterIndex < subchapters.length - 1) {
      setCurrentSubchapterIndex(currentSubchapterIndex + 1);
    } else if (currentChapterIndex < chapterNames.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentSubchapterIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentSubchapterIndex > 0) {
      setCurrentSubchapterIndex(currentSubchapterIndex - 1);
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentSubchapterIndex(chapters[chapterNames[currentChapterIndex - 1]].length - 1);
    }
  };

  const goToCourse = (chapterIndex, subchapterIndex) => {
    setCurrentChapterIndex(chapterIndex);
    setCurrentSubchapterIndex(subchapterIndex);
  };

  const handleTakeExam = () => {
    window.location.href = "/schoolai/exam"; // Update this if you have a specific route
  };

  const handleDigDeeper = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://137.184.193.15:5000/dig-deeper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chapter_name: currentChapterName,
          subchapter_name: currentSubchapter,
          prompt
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDetailedContent(data);
      setIsLoading(false);
    } catch (error) {
      console.error('There was an error fetching the detailed content:', error);
      setIsLoading(false);
    }
  };

  const currentPage = currentChapterIndex * subchapters.length + currentSubchapterIndex + 1;
  const totalPages = chapterNames.reduce((acc, chapter) => acc + chapters[chapter].length, 0);

  return (
    <>
      <Header />
      <div className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex}`} style={{marginTop: "100px"}}>
        <div className={styles.toc}>
          <h2 className={styles.title}>Table of Contents</h2>
          {chapterNames.map((chapterName, chapterIndex) => (
            <div key={chapterIndex}>
              <h3 className={styles.chapterTitle}>{chapterName}</h3>
              <ul className={styles.chapterList}>
                {chapters[chapterName].map((subchapter, subchapterIndex) => (
                  <li key={subchapterIndex} onClick={() => goToCourse(chapterIndex, subchapterIndex)} className={styles.chapterItem}>
                    Course {subchapterIndex + 1}: {subchapter.replace(/^Subchapter \d+: /, '')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${styles.courseContentPage} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <div className={styles.header}>
            <h1 className={`${styles.text3xl} ${styles.fontBold} ${styles.textCenter}`}>Created Courses</h1>
          </div>
          <div className={styles.courseContent}>
            <h2 className={styles.currentChapterTitle}>{currentChapterName}</h2>
            <h3 className={styles.currentSubchapterTitle}>Course {currentSubchapterIndex + 1}: {currentSubchapter}</h3>
            {isLoading ? (
              <div className={styles.loading}>
                <div className={styles.loader}></div>
              </div>
            ) : (
              <div className={styles.detailedContent}>
                {renderContent(parsedContent)}
              </div>
            )}
            <button onClick={handleTakeExam} className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`} style={{marginRight:"30px"}}>Take Exam</button>
            <button onClick={handleDigDeeper} className={`${styles.btn} ${styles.btnSecondary} ${styles.mt4}`} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Dig Deeper'}
            </button>
          </div>
          <div className={styles.pagination}>
            <button onClick={handlePrev} disabled={currentChapterIndex === 0 && currentSubchapterIndex === 0} className={styles.paginationBtn}>
              &lt; Previous
            </button>
            <span className={styles.pageInfo}>
              Page: {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentChapterIndex === chapterNames.length - 1 && currentSubchapterIndex === subchapters.length - 1}
              className={styles.paginationBtn}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHistoryCoursePage;
