'use client';

import "regenerator-runtime/runtime";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Recorder = () => {
    const [arr, setArr] = useState([]); // State to hold transcript array
    const { transcript,resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const startListening = () =>{
        resetTranscript()
         SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    }
    
    const stopListening = () => {

        SpeechRecognition.stopListening();
        // Add the latest transcript to the array
        setArr(prevArr => [...prevArr, transcript]);
       
    }

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser doesn't support speech recognition.</p>;
    }

    return (
        <div className="container">
            <h2>Speech to Text Converter</h2>
            <br />
            <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

            <div className="main-content">
                {transcript}
            </div>

            <div className="btn-style">
                <button onClick={startListening}>Start Listening</button>
                <button onClick={stopListening}>Stop Listening</button>
            </div>

            
        </div>
    )
}

export default Recorder;
