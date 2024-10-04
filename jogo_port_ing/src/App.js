import React, { useState } from 'react';
import ArrowSelection from './components/arrow-selection';
import TextSequence from './components/text-sequence';
import SquareGrid from './components/square-grid';
import StartScreen from './components/StartScreen';
import CreatorsScreen from './components/CreatorScreen'; 
import './App.css';

import ichigo1 from './assets/personagem1/1.png';
import ichigo2 from './assets/personagem1/2.png';
import takakura1 from './assets/personagem2/3.png';
import takakura2 from './assets/personagem2/4.png';
import bg1 from './assets/backgrounds/backgrounds1.png';
import bg2 from './assets/backgrounds/backgrounds2.png';
import squareBackground from './assets/backgrounds/squareBackground.png';
import startScreenBackground from './assets/backgrounds/startScreenBackground.png'
import video1 from './assets/videos/videoplayback.mp4';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showCreatorsScreen, setShowCreatorsScreen] = useState(false);
  const [phrases, setPhrases] = useState(['Escolha 1', 'Escolha 2']);
  const [disableNavigation, setDisableNavigation] = useState(false);
  const [currentBlock, setCurrentBlock] = useState('initial');
  const [showTextSequence, setShowTextSequence] = useState(false);
  const [textToShow, setTextToShow] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoSource, setVideoSource] = useState('');
  const [showConversation, setShowConversation] = useState(false);

  const [leftImage, setLeftImage] = useState(ichigo1);
  const [rightImage, setRightImage] = useState(takakura1);
  const [backgroundImage, setBackgroundImage] = useState(startScreenBackground);

  const blocks = {
    'initial': {
      options: ['block2', 'block5'],
      texts: ['Texto relacionado à escolha 1.', 'Texto relacionado à escolha 2.'],
      images: [
        { left: ichigo1, background: bg1 },
        { left: ichigo2, background: bg2 }
      ],
      videos: [video1, null]
    },
    'block2': {
      options: ['block7', 'block9'],
      texts: ['Texto após escolha 1 na block2.', 'Texto após escolha 2 na block2.'],
      newPhrases: ['Escolha 3', 'Escolha 4'],
      images: [
        { left: ichigo1, right: takakura2, background: bg1 },
        { left: ichigo2, right: takakura1, background: bg2 }
      ],
      videos: [null, video1]
    },
    'block5': {
      options: ['blockSquare'],
      texts: ['Texto após escolha 1 na block5.', 'Texto após escolha 2 na block5.'],
      newPhrases: ['Escolha 5', 'Escolha 6'],
      images: [
        { left: ichigo1, right: takakura2, background: bg1 },
        { left: ichigo2, right: takakura1, background: bg2 }
      ],
      videos: [null, null]
    },
    'blockSquare': {
      background: squareBackground,
      squares: [
        { id: 1, label: 'Quadrado 1', action: () => setShowConversation(true) },
        {
          id: 2, label: 'Quadrado 2', action: () => {
            setVideoSource(video1);
            setShowVideo(true);
            setDisableNavigation(true);
            setCurrentBlock('block10');
            setDisableNavigation(false);
          }
        }
      ]
    },
    'block10': {
      options: ['block11', 'block12'],
      texts: ['Texto após escolha quadrado2 na block2.', 'Texto após escolha quadrado2 na block2.'],
      newPhrases: ['Escolha 11', 'Escolha 12'],
      images: [
        { left: ichigo1, right: takakura2, background: bg1 },
        { left: ichigo2, right: takakura1, background: bg2 }
      ],
      videos: [null, null]
    },
  };

  const handleStart = () => {
    setShowStartScreen(false); 
    setVideoSource(video1);    
    setShowVideo(true);  
  };

  const handleSelection = (value) => {
    setDisableNavigation(true);
    const block = blocks[currentBlock];

    if (block) {
      setTextToShow([block.texts?.[value] || '']);
      setCurrentBlock(block.options?.[value] || currentBlock);
      setShowTextSequence(!!block.texts);

      if (block.images) {
        setLeftImage(block.images[value].left);
        setRightImage(block.images[value].right);
        setBackgroundImage(block.images[value].background);
      }

      if (block.videos && block.videos[value]) {
        setVideoSource(block.videos[value]);
        setShowVideo(true);
      } else {
        setShowVideo(false);  
        setDisableNavigation(false);
      }
    }
  };

  const handleBackFromConversation = () => {
    setShowConversation(false);
  };

  const handleCreators = () => {
    setShowCreatorsScreen(true);  
    setShowStartScreen(false);  
  };
  
  const handleVideoEnded = () => {
    setShowVideo(false);
    setDisableNavigation(false);
  };

  const handleBackToStart = () => {
    setShowStartScreen(true);  
    setShowCreatorsScreen(false);  
  };

  const handleTextComplete = () => {
    setShowTextSequence(false);
    const block = blocks[currentBlock];

    if (block && block.newPhrases) {
      setPhrases(block.newPhrases);
    }
  };

  // Função para obter os nomes dos personagens com base nas imagens
  const getCharacterNames = () => {
    let leftName = '';
    let rightName = '';

    if (leftImage === ichigo1 || leftImage === ichigo2) {
      leftName = 'Ichigo';
    }
    if (rightImage === takakura1 || rightImage === takakura2) {
      rightName = 'Takakura';
    }

    return { leftName, rightName };
  };

  const { leftName, rightName } = getCharacterNames();

  return (
    <div 
      className="app-container" 
      style={{
        backgroundImage: !showStartScreen && !showCreatorsScreen ? `url(${backgroundImage})` : 'none',
      }}
    >
      {/* Renderiza a tela inicial */}
      {showStartScreen && (
        <StartScreen onStart={handleStart} onCreators={handleCreators} /> 
      )}
      
      {/* Renderiza a tela de Creators */}
      {showCreatorsScreen && (
        <CreatorsScreen onBack={handleBackToStart} /> 
      )}
  
      {/* Renderiza o jogo se não estiver nas telas de Start ou Creators */}
      {!showStartScreen && !showCreatorsScreen && (
        <>
          {currentBlock === 'blockSquare' && !showConversation ? (
            <SquareGrid squares={blocks['blockSquare'].squares} />
          ) : showConversation ? (
            <div className="conversation-block">
              <button className="back-button" onClick={handleBackFromConversation}>Voltar</button>
              <div className="conversation-text">
                <p>Esta é a conversa que aparece ao clicar no Quadrado 1.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="image-container">
                {leftImage && (
                  <img src={leftImage} alt="Left" className="left-image" />
                )}
                {rightImage && (
                  <img src={rightImage} alt="Right" className="right-image" />
                )}
              </div>
  
              {showVideo && (
                <div className="video-overlay">
                  <video
                    controls
                    className="video-player"
                    autoPlay
                    onEnded={handleVideoEnded}
                  >
                    <source src={videoSource} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              )}
  
              {!showVideo && !showTextSequence && (
                <ArrowSelection
                  phrases={phrases}
                  onSelection={handleSelection}
                  disableNavigation={disableNavigation}
                />
              )}
  
              {!showVideo && showTextSequence && (
                <TextSequence 
                  texts={textToShow} 
                  onComplete={handleTextComplete} 
                  leftName={leftName} 
                  rightName={rightName} // Passa os nomes dos personagens para o componente TextSequence
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );  
};

export default App;
