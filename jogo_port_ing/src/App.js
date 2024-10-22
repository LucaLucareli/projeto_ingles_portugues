import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import FirstScene from './FirstScene'; // Componente da primeira cena
import CreatorsScreen from './components/CreatorScreen'; // Componente da tela dos criadores
import Video1 from './assets/begining.mp4';
import Video2 from './assets/second_video.mp4'; // Segundo vídeo
import PredioEscolhaEs from './PredioEscolhaEs';
import './App.css'; // Add a CSS file for custom styles

const App = () => {
  const [scene, setScene] = useState('start');
  const [isFirstVideoEnded, setIsFirstVideoEnded] = useState(false); // Track first video end

  const handleStart = () => {
    setScene('firstScene'); // Muda para a primeira cena
  };

  const handleStart2 = () => {
    setScene('scenePredio');
  };

  const handleCreators = () => {
    setScene('creators'); // Muda para a tela dos criadores
  };

  const handleBack = () => {
    setScene('start'); // Retorna à tela inicial
  };

  // Handle first video ended to transition to second video
  const handleFirstVideoEnd = () => {
    setIsFirstVideoEnded(true); // Indicate that the first video has ended
  };

  // Handle second video ended to transition to FirstScene
  const handleSecondVideoEnd = () => {
    setScene('firstSceneContent'); // Muda para o conteúdo da primeira cena após o segundo vídeo
    setIsFirstVideoEnded(false); // Reset state
  };

  return (
    <div className="app-container">
      {scene === 'start' && (
        <StartScreen onStart={handleStart} onStart2={handleStart2} onCreators={handleCreators} />
      )}
      {scene === 'firstScene' && !isFirstVideoEnded && (
        <div className='video-container'>
          <video
            autoPlay
            controls
            src={Video1}
            className="full-screen-video"
            onEnded={handleFirstVideoEnd} // Chama quando o primeiro vídeo termina
          />
        </div>
      )}
      {isFirstVideoEnded && (
        <div className='video-container'>
          <video
            autoPlay
            controls
            src={Video2}
            className="full-screen-video"
            onEnded={handleSecondVideoEnd} // Chama quando o segundo vídeo termina
          />
        </div>
      )}
      {scene === 'firstSceneContent' && <FirstScene onBack={handleBack} />}
      {scene === 'scenePredio' && <PredioEscolhaEs onBack={handleBack} />}
      {scene === 'creators' && <CreatorsScreen onBack={handleBack} />}
    </div>
  );
};

export default App;
