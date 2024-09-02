import React, { useState, useEffect, useRef } from 'react';
import styles from '../../style/CourseContentPage.module.css';
import Header from '../Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import teacherImage from '../../assets/images/all-img/ai-teacher.png';

const CourseContentPage = () => {
  const [prompt, setPrompt] = useState('');
  const [chapters, setChapters] = useState({});
  const [content, setContent] = useState({});
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentSubchapterIndex, setCurrentSubchapterIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isLoadingVoice, setIsLoadingVoice] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [isVoiceVisible, setIsVoiceVisible] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const audioRef = useRef(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not signed in");
        window.location.href = "/schoolai/login";
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        const querySnapshot = await getDocs(collection(db, 'course_data'));
        let mostRecentDoc = null;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.user_id === userId) {
            if (!mostRecentDoc || data.timestamp > mostRecentDoc.timestamp) {
              mostRecentDoc = { id: doc.id, ...data };
            }
          }
        });

        if (mostRecentDoc) {
          setPrompt(mostRecentDoc.input_data);
          setChapters(JSON.parse(mostRecentDoc.course_outline));
          setContent(JSON.parse(mostRecentDoc.course_content));
          setIsLoading(false);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if (audioUrl) {
      playAudio(audioUrl);
    }
  }, [audioUrl]);

  if (isLoading) return <div className={styles.loading}><div className={styles.loader}></div></div>;

  const parseContent = (content) => {
    if (!content) return [];
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
    window.location.href = "/schoolai/exam";
  };

  const handleTakeFinalExam = () => {
    window.location.href = "/schoolai/final-exam";
  };

  const handleVoiceGenerate = async (url, text, isQuestion = false) => {
    setIsLoadingVoice(true);
    try {
      const audioResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chapter_name: currentChapterName,
          subchapter_name: currentSubchapter,
          prompt: text,
          voice_id: 'ErXwobaYiN019PkySvjV'  // Replace with actual voice ID
        })
      });

      if (!audioResponse.ok) {
        console.error('Failed to generate voice');
        return;
      }

      const audioBlob = await audioResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);

      const generatedTextResponse = await audioResponse.json(); // Assuming the response contains text
      setGeneratedText(generatedTextResponse.generated_text);

      if (isQuestion) {
        playAudio(audioUrl);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoadingVoice(false);
    }
  };

  const handleVideoGenerate = async (url, text, isQuestion = false) => {
    setIsLoadingVoice(true);
    try {
      const audioResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chapter_name: currentChapterName,
          subchapter_name: currentSubchapter,
          prompt: text,
          voice_id: 'ErXwobaYiN019PkySvjV'  // Replace with actual voice ID
        })
      });

      if (!audioResponse.ok) {
        console.error('Failed to generate voice');
        return;
      }

      const audioBlob = await audioResponse.blob();
      const audioBase64 = await convertBlobToBase64(audioBlob);

      const imageBlob = await fetch(teacherImage).then(res => res.blob());
      const imageBase64 = await convertImageToBase64(URL.createObjectURL(imageBlob));

      const videoResponse = await fetch('http://localhost:5000/generate-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageFileName: 'teacher.png',
          imageFileData: imageBase64,
          audioFileName: 'audio.wav',
          audioFileData: audioBase64
        })
      });

      if (!videoResponse.ok) {
        console.error('Failed to generate video');
        return;
      }

      const result = await videoResponse.json();
      const videoUrl = result.output.output_video;

      setVideoUrl(videoUrl);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoadingVoice(false);
    }
  };

  const playAudio = (url) => {
    const audio = new Audio(url);
    setIsPlaying(true);
    audioRef.current = audio;
    audio.play();

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio(audioUrl);
    }
  };

  const handleExplainClick = () => {
    handleVoiceGenerate('http://localhost:5000/generate-explanation', prompt);
  };

  const handleAskQuestionClick = () => {
    handleVoiceGenerate('http://localhost:5000/ask-question', questionText, true);
  };

  const handleExplainVideoClick = () => {
    handleVideoGenerate('http://localhost:5000/generate-explanation', prompt);
  };

  const handleAskQuestionVideoClick = () => {
    handleVideoGenerate('http://localhost:5000/ask-question', questionText, true);
  };

  const handleDigDeeper = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/dig-deeper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chapter_name: currentChapterName,
          subchapter_name: currentSubchapter,
          prompt: prompt
        })
      });
      const data = await response.json();
      setContent(prevContent => ({
        ...prevContent,
        [`${currentChapterName}-${currentSubchapter}`]: data,
      }));
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleVoiceButtonClick = () => {
    setIsVoiceVisible(!isVoiceVisible);
  };

  const handleVoiceModeClick = () => {
    setIsVoiceMode(!isVoiceMode);
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

  const currentPage = currentChapterIndex * subchapters.length + currentSubchapterIndex + 1;
  const totalPages = chapterNames.reduce((acc, chapter) => acc + chapters[chapter].length, 0);

  return (
    <>
      <Header />
      <div className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex}`} style={{ marginTop: "100px" }}>
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
          <div>
            <h3 className={styles.chapterTitle} onClick={handleTakeFinalExam}>Final Exam</h3>
          </div>
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
            <div className={styles.buttonGroup}>
              <button onClick={handleTakeExam} className={`${styles.btn} ${styles.btnPrimary} ${styles.mt4}`}>Take Exam</button>
              <button onClick={handleDigDeeper} className={`${styles.btn} ${styles.btnSuccess} ${styles.mt4}`}>Dig Deeper</button>
              <button onClick={handleVoiceModeClick} className={`${styles.btn} ${styles.btnVoiceMode} ${styles.mt4}`} disabled={isLoading}>
                {isVoiceMode ? 'Hide AI Teacher Voice Mode' : 'AI Teacher Voice Mode'}
              </button>
              <button onClick={handleVoiceButtonClick} className={`${styles.btn} ${styles.btnWarning} ${styles.mt4}`} disabled={isLoading}>
                {isVoiceVisible ? 'Hide AI Teacher Video Mode' : 'AI Teacher Video Mode'}
              </button>
            </div>
            {isVoiceMode && (
              <div className={styles.voiceOptionsContainer}>
                <div className={styles.voiceContainer}>
                  <div className={styles.voiceButtons}>
                    <button onClick={handleExplainClick} className={`${styles.btn} ${styles.btnVoice}`}>
                      {isLoadingVoice ? 'Generating...' : 'Listen to voice explanation'}
                    </button>
                    <textarea
                      placeholder="Ask a question..."
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                      className={styles.questionInput}
                    />
                    <button onClick={handleAskQuestionClick} className={`${styles.btn} ${styles.btnVoice}`}>
                      {isLoadingVoice ? 'Generating...' : 'Voice Q&A'}
                    </button>
                  </div>
                  {audioUrl && (
                    <>
                      <div className={styles.generatedText}>{generatedText}</div>
                      <button onClick={toggleAudio} className={`${styles.btn} ${styles.btnVoice} ${styles.mt4}`}>
                        {isPlaying ? 'Stop' : 'Play'}
                      </button>
                      {isPlaying && (
                        <div className={styles.progressBarContainer}>
                          <div className={styles.progressBar} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
            {isVoiceVisible && (
              <div className={styles.voiceOptionsContainer}>
                <div className={styles.voiceContainer}>
                  <button onClick={handleExplainVideoClick} className={`${styles.btn} ${styles.btnVoice}`}>
                    {isLoadingVoice ? 'Generating...' : "AI Teacher's explanation about the course"}
                  </button>
                  <textarea
                    placeholder="Ask a question..."
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className={styles.questionInput}
                  />
                  <button onClick={handleAskQuestionVideoClick} className={`${styles.btn} ${styles.btnVoice}`}>
                    {isLoadingVoice ? 'Generating...' : "Q&A with AI Teacher"}
                  </button>
                  {videoUrl ? (
                    <video controls src={videoUrl} autoPlay className={styles.teacherVideo} />
                  ) : (
                    <img src={teacherImage} alt="Teacher" className={`${styles.teacherImage} ${isLoadingVoice ? styles.imageAnimation : ''}`} />
                  )}
                </div>
              </div>
            )}
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

function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function convertImageToBase64(imgPath) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    fetch(imgPath)
      .then(res => res.blob())
      .then(blob => {
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      })
      .catch(reject);
  });
}

export default CourseContentPage;
