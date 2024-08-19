import React, { useState, useRef, useEffect } from 'react';
import styles from '../../style/GenerateVideoCourse.module.css';
import Header from '../Header';

const GenerateVideoCourse = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isLoadingVoice, setIsLoadingVoice] = useState(false);
  const [voiceUrl, setVoiceUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const imageFileInputRef = useRef(null);
  const audioFileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Generate Video Course"; // Set the title
  }, []);

  const handleGenerate = async () => {
    setIsLoadingImage(true);
    setGeneratedImage(null);
    try {
      const response = await fetch('http://localhost:5000/generate-teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setGeneratedImage(url);

        // Automatically select generated image for avatar
        const imageFile = new File([blob], 'generated-teacher-image.png', { type: 'image/png' });
        setImageFile(imageFile);
        const dt = new DataTransfer();
        dt.items.add(imageFile);
        imageFileInputRef.current.files = dt.files;
      } else {
        console.error('Failed to generate image');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoadingImage(false);
    }
  };

  const handleGenerateVoice = async () => {
    setIsLoadingVoice(true);
    const formData = new FormData(document.getElementById('voice-form'));
    try {
      const response = await fetch('http://localhost:5000/generate-voice', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVoiceUrl(url);
        // Auto play the audio
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.play();
        setIsPlaying(true);

        audio.addEventListener('timeupdate', () => {
          setProgress((audio.currentTime / audio.duration) * 100);
        });

        audio.addEventListener('ended', () => {
          setIsPlaying(false);
          setProgress(0);
        });

        // Automatically select generated voice for avatar
        const audioFile = new File([blob], 'generated-teacher-voice.mp3', { type: 'audio/mpeg' });
        setAudioFile(audioFile);
        const dt = new DataTransfer();
        dt.items.add(audioFile);
        audioFileInputRef.current.files = dt.files;
      } else {
        console.error('Failed to generate voice');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoadingVoice(false);
    }
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (id === 'imageFile') {
      setImageFile(files[0]);
    } else if (id === 'audioFile') {
      setAudioFile(files[0]);
    }
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!imageFile || !audioFile) {
      setError('Both files are required');
      setLoading(false);
      return;
    }

    const imageFileName = imageFile.name;
    const audioFileName = audioFile.name;
    const imageFileData = await toBase64(imageFile);
    const audioFileData = await toBase64(audioFile);

    const payload = {
      imageFileName,
      imageFileData,
      audioFileName,
      audioFileData,
    };

    const response = await fetch('http://localhost:5000/generate-avatar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("Response:", result);  // Debug log for response

    setLoading(false);

    if (response.status === 200 && result.status === 'completed' && result.output && result.output.output_video) {
      setVideoSrc(result.output.output_video);
    } else {
      setError(result.error || 'An error occurred');
    }
  };

  return (
    <>
      <Header />
      <div className={`${styles.sectionPadding} ${styles.bgCover} ${styles.bgNoRepeat} ${styles.bgCenter} ${styles.minHScreen} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`} style={{marginTop:"100px"}}>
        <div className={`${styles.container} ${styles.bgWhite} ${styles.shadowBox5} ${styles.rounded} ${styles.p8}`}>
          <h1 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb6} ${styles.textCenter}`}>Generate Video Course</h1>

          {/* Generate AI Human Teacher Section */}
          <div className={styles.generateSection}>
            <textarea
              placeholder="Enter prompt for AI Human Teacher..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className={`${styles.wFull} ${styles.p4} ${styles.border} ${styles.roundedMd} ${styles.focusOutlineNone} ${styles.focusRing2} ${styles.focusRingPrimary} ${styles.mb4}`}
            />
            <button onClick={handleGenerate} disabled={isLoadingImage} className={`${styles.btn} ${styles.btnPrimary}`}>
              {isLoadingImage ? <div className={styles.spinner}></div> : 'Generate Image'}
            </button>
            {generatedImage && (
              <div className={styles.imageContainer}>
                <img src={generatedImage} alt="Generated AI Human Teacher" className={styles.generatedImage} />
              </div>
            )}
            <form id="voice-form" encType="multipart/form-data" className={styles.voiceForm}>
              <div className={styles.voiceSelection}>
                <label htmlFor="voice_id">Select Voice:</label>
                <select name="voice_id" id="voice_id" className={styles.select}>
                  {/* Add your voice options here */}
                  <option value="pNInz6obpgDQGcFmaJgB">Adam - Male, Middle Aged, American, Deep, Narration</option>
                  <option value="Xb7hH8MSUJpSbSDYk0k2">Alice - Female, Middle Aged, British, Confident, News</option>
                  <option value="ErXwobaYiN019PkySvjV">Antoni - Male, Young, American, Well-rounded, Narration</option>
                  <option value="VR6AewLTigWG4xSOukaG">Arnold - Male, Middle Aged, American, Crisp, Narration</option>
                  <option value="pqHfZKP75CvOlQylNhV4">Bill - Male, Middle Aged, American, Strong, Documentary</option>
                  <option value="nPczCjzI2devNBz1zQrb">Brian - Male, Middle Aged, American, Deep, Narration</option>
                  <option value="N2lVS1w4EtoT3dr4eOWO">Callum - Male, Middle Aged, American, Hoarse, Video Games</option>
                  <option value="IKne3meq5aSn9XLyUdCD">Charlie - Male, Middle Aged, Australian, Casual, Conversational</option>
                  <option value="XB0fDUnXU5powFXDhCwa">Charlotte - Female, Middle Aged, English-Swedish, Seductive, Video Games</option>
                  <option value="iP95p4xoKVk53GoZ742B">Chris - Male, Middle Aged, American, Casual, Conversational</option>
                  <option value="2EiwWnXFnvU5JabPnv8n">Clyde - Male, Middle Aged, American, War Veteran, Video Games</option>
                  <option value="onwK4e9ZLuTAKqWW03F9">Daniel - Male, Middle Aged, British, Deep, News Presenter</option>
                  <option value="CYw3kZ02Hs0563khs1Fj">Dave - Male, Young, British-Essex, Conversational, Video Games</option>
                  <option value="AZnzlk1XvdvUeBnXmlld">Domi - Female, Young, American, Strong, Narration</option>
                  <option value="ThT5KcBeYPX3keUQqHPh">Dorothy - Female, Young, British, Pleasant, Children’s Stories</option>
                  <option value="29vD33N1CtxCmqQRPOHJ">Drew - Male, Middle Aged, American, Well-rounded, News</option>
                  <option value="LcfcDJNUP1GQjkzn1xUU">Emily - Female, Young, American, Calm, Meditation</option>
                  <option value="g5CIjZEefAph4nQFvHAz">Ethan - Male, Young, American, ASMR</option>
                  <option value="D38z5RcWu1voky8WS1ja">Fin - Male, Old, Irish, Sailor, Video Games</option>
                  <option value="jsCqWAovK2LkecY7zXl4">Freya - Female, Young, American</option>
                  <option value="JBFqnCBsd6RMkjVDRZzb">George - Male, Middle Aged, British, Raspy, Narration</option>
                  <option value="jBpfuIE2acCO8z3wKNLl">Gigi - Female, Young, American, Childish, Animation</option>
                  <option value="zcAOhNBS3c14rBihAFp1">Giovanni - Male, Young, English-Italian, Foreigner, Audiobook</option>
                  <option value="z9fAnlkpzviPz146aGWa">Glinda - Female, Middle Aged, American, Witch, Video Games</option>
                  <option value="oWAxZDx7w5VEj9dCyTzz">Grace - Female, Young, American-Southern, Audiobook</option>
                  <option value="SOYHLrjzK2X1ezoPC6cr">Harry - Male, Young, American, Anxious, Video Games</option>
                  <option value="ZQe5CZNOzWyzPSCn5a3c">James - Male, Old, Australian, Calm, News</option>
                  <option value="bVMeCyTHy58xNoL34h3p">Jeremy - Male, Young, American-Irish, Excited, Narration</option>
                  <option value="t0jbNlBVZ17f02VDIeMI">Jessie - Male, Old, American, Raspy, Video Games</option>
                  <option value="Zlb1dXrM653N07WRdFW3">Joseph - Male, Middle Aged, British, News</option>
                  <option value="TxGEqnHWrfWFTfGW9XjX">Josh - Male, Young, American, Deep, Narration</option>
                  <option value="TX3LPaxmHKxFdv7VOQHJ">Liam - Male, Young, American, Narration</option>
                  <option value="pFZP5JQG7iQjIQuC4Bku">Lily - Female, Middle Aged, British, Raspy, Narration</option>
                  <option value="XrExE9yKIg1WjnnlVkGX">Matilda - Female, Young, American, Warm, Audiobook</option>
                  <option value="flq6f7yk4E4fJM5XTYuZ">Michael - Male, Old, American, Audiobook</option>
                  <option value="zrHiDhphv9ZnVXBqCLjz">Mimi - Female, Young, English-Swedish, Childish, Animation</option>
                  <option value="piTKgcLEGmPE4e6mEKli">Nicole - Female, Young, American, Whisper, Audiobook</option>
                  <option value="ODq5zmih8GrVes37DQw2">Noah - Male, Middle Aged, American, Deep, Narration</option>
                  <option value="Ia1kV0MgG8KvAbm7QZ2R">Paul - Male, Old, British, Calm, Audiobook</option>
                  <option value="5J00UBtQ2k5Kx0pT0YI2">Peter - Male, Middle Aged, British, Crisp, News</option>
                  <option value="I0GpwhjD1oy0KmL3lMuH">Rafi - Male, Middle Aged, American, Deep, Narration</option>
                  <option value="Cip2X5SPp4KbPC8ZlfnL">Ralph - Male, Young, British, Conversational, Video Games</option>
                  <option value="hA3GRqOZJjX6Sn8p7V9W">Richard - Male, Old, British, Deep, Audiobook</option>
                  <option value="dBiQcx9hxxGf5egzC8sA">Rick - Male, Middle Aged, American, Strong, Documentary</option>
                  <option value="J3DKWqO1Mv81sFgNdLXy">Rob - Male, Middle Aged, Australian, Conversational, Video Games</option>
                  <option value="sOnfD9fJWdHSokC3Rlq9">Sam - Male, Middle Aged, British, Storytelling, Audiobook</option>
                  <option value="bJ6ZDy1Zne5bDq8XlAaG">Sarah - Female, Young, American, Upbeat, Animation</option>
                  <option value="pKrPUA5Bk8Ty4HqKvBb0">Scott - Male, Young, American, Calm, Audiobook</option>
                  <option value="5PLo7aZzrLf9Gqj2eNql">Sebastian - Male, Young, American, Cool, Video Games</option>
                  <option value="gAnwBv0wTWFFUz2eJDjJ">Sophie - Female, Young, American, Soft, Audiobook</option>
                  <option value="6gkXTZbRbA8AIBeWElCw">Steve - Male, Old, American, Deep, Audiobook</option>
                  <option value="CmDR6E6jAKHwT1GwVX5C">Stuart - Male, Young, American, Excited, Video Games</option>
                  <option value="qlXp1PSyRO5J5TeRFfbc">Ted - Male, Old, British, Storytelling, Audiobook</option>
                  <option value="f5x0hM6h5TTlqH6b2RWT">Tom - Male, Middle Aged, British, Smooth, News</option>
                  <option value="dSkM4iyHyWVe3KwRA9ND">Troy - Male, Young, American, Happy, Audiobook</option>
                  <option value="e3BAAw4p2Wm0QHlJr9m4">Tyler - Male, Young, American, Strong, Video Games</option>
                  <option value="CkPO3aCkxu16PIwDNXaB">Vince - Male, Old, American, Deep, Audiobook</option>
                  <option value="hVju9yAcl1q5ofkye1in">Wayne - Male, Middle Aged, Australian, Gruff, Video Games</option>
                  <option value="K1tpScC0yYKGBWa6AqGZ">Zac - Male, Young, Australian, Casual, Video Games</option>
                  <option value="20dNGZ7M8Ffq4D5iukbU">Zach - Male, Middle Aged, American, Deep, Documentary</option>
                  <option value="ThnO2MzPoLVbr7nN2G3w">Zoe - Female, Young, American, Soft, Audiobook</option>
                </select>
                <textarea
                  placeholder="Enter text for voice generation..."
                  name="text"
                  rows="4"
                  cols="50"
                  className={`${styles.wFull} ${styles.p4} ${styles.border} ${styles.roundedMd} ${styles.focusOutlineNone} ${styles.focusRing2} ${styles.focusRingPrimary} ${styles.mb4}`}
                />
                <button type="button" onClick={handleGenerateVoice} disabled={isLoadingVoice} className={`${styles.btn} ${styles.btnPrimary}`}>
                  {isLoadingVoice ? <div className={styles.spinner}></div> : 'Generate Voice'}
                </button>
                {voiceUrl && (
                  <>
                    {isPlaying && <div className={styles.progressBar}><div className={styles.progress} style={{ width: `${progress}%` }}></div></div>}
                  </>
                )}
              </div>
            </form>
          </div>

          {/* Generate Avatar Section */}
          <div className={styles.generateSection}>
            <form onSubmit={handleSubmit} className={styles.avatarForm}>
              <label htmlFor="imageFile" className={styles.label}>Image File:</label>
              <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={handleFileChange}
                ref={imageFileInputRef}
                className={styles.fileInput}
                required
              /><br /><br />
              {imageFile && (
                <div className={styles.selectedFile}>
                  <p>Selected Image File: {imageFile.name}</p>
                  <img src={URL.createObjectURL(imageFile)} alt="Selected AI Human Teacher" className={styles.selectedImage} />
                </div>
              )}

              <label htmlFor="audioFile" className={styles.label}>Audio File:</label>
              <input
                type="file"
                id="audioFile"
                accept="audio/*"
                onChange={handleFileChange}
                ref={audioFileInputRef}
                className={styles.fileInput}
                required
              /><br /><br />

              <button type="submit" disabled={loading} className={`${styles.btn} ${styles.btnPrimary}`}>
                {loading ? <div className={styles.spinner}></div> : 'Generate'}
              </button>
            </form>
            {loading && <div className={styles.loadingSpinner}></div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {videoSrc && (
              <div className={styles.resultContainer}>
                <video id="resultVideo" controls className={styles.resultVideo} src={videoSrc}></video>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateVideoCourse;

