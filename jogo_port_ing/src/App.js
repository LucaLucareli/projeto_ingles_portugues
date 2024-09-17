import React, { useState } from 'react';
import ArrowSelection from './components/arrow-selection';
import TextSequence from './components/text-sequence';
import SquareGrid from './components/square-grid'; // Importa o novo componente SquareGrid
import './App.css'; // Importa o arquivo CSS para estilização

import ichigo1 from './assets/personagem1/1.png';
import ichigo2 from './assets/personagem1/2.png';
import takakura1 from './assets/personagem2/3.png';
import takakura2 from './assets/personagem2/4.png';
import bg1 from './assets/backgrounds/backgrounds1.png'; // Imagem de fundo 1
import bg2 from './assets/backgrounds/backgrounds2.png'; // Imagem de fundo 2
import squareBackground from './assets/backgrounds/squareBackground.png'; // Novo background para o bloco com quadrados

import video1 from './assets/videos/videoplayback.mp4';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true); // Estado para controlar a tela inicial
  const [phrases, setPhrases] = useState(['Escolha 1', 'Escolha 2']);
  const [disableNavigation, setDisableNavigation] = useState(false);
  const [currentBlock, setCurrentBlock] = useState('initial');
  const [showTextSequence, setShowTextSequence] = useState(false);
  const [textToShow, setTextToShow] = useState([]);
  const [showVideo, setShowVideo] = useState(false); // Estado para exibir o vídeo
  const [videoSource, setVideoSource] = useState(''); // Fonte do vídeo atual
  const [showConversation, setShowConversation] = useState(false); // Estado para a tela de conversa

  // URLs das imagens
  const [leftImage, setLeftImage] = useState(ichigo1);
  const [rightImage, setRightImage] = useState(takakura1);
  const [backgroundImage, setBackgroundImage] = useState(bg1); // Estado da imagem de fundo

  // Mapa de blocos com opções, textos, imagens, vídeos (opcionais) e imagens de fundo
  const blocks = {
    'initial': {
      options: ['block2', 'block5'],
      texts: ['Texto relacionado à escolha 1.', 'Texto relacionado à escolha 2.'],
      images: [
        { left: ichigo1, right: takakura2, background: bg1 },
        { left: ichigo2, right: takakura1, background: bg2 }
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
      options: ['blockSquare'], // Agora leva para o bloco com quadrados
      texts: ['Texto após escolha 1 na block5.', 'Texto após escolha 2 na block5.'],
      newPhrases: ['Escolha 5', 'Escolha 6'],
      images: [
        { left: ichigo1, right: takakura2, background: bg1 },
        { left: ichigo2, right: takakura1, background: bg2 }
      ],
      videos: [null, null]
    },
    'blockSquare': {
      background: squareBackground, // Fundo especial para esse bloco
      squares: [
        { id: 1, label: 'Quadrado 1', action: () => setShowConversation(true) }, // Ação para o quadrado 1
        {
          id: 2, label: 'Quadrado 2', action: () => {
            setVideoSource(video1);
            setShowVideo(true);
            setDisableNavigation(true);
            setCurrentBlock('block10'); // Navega diretamente para o bloco 10
            setDisableNavigation(false); // Reabilita a navegação
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
    setShowStartScreen(false); // Desativa a tela inicial e ativa o restante da aplicação
  };

  const handleSelection = (value) => {
    setDisableNavigation(true);

    const block = blocks[currentBlock];
    if (block) {
      // Atualiza as informações do bloco selecionado
      setTextToShow([block.texts?.[value] || '']);
      setCurrentBlock(block.options?.[value] || currentBlock);
      setShowTextSequence(!!block.texts);

      // Atualiza as imagens com base na escolha
      if (block.images) {
        setLeftImage(block.images[value].left);
        setRightImage(block.images[value].right);
        setBackgroundImage(block.images[value].background); // Atualiza o fundo
      }

      // Verifica se há um vídeo para exibir
      if (block.videos && block.videos[value]) {
        setVideoSource(block.videos[value]); // Define a fonte do vídeo
        setShowVideo(true); // Ativa a exibição do vídeo
      } else {
        setShowVideo(false); // Não exibe vídeo se não houver
        setDisableNavigation(false); // Reabilita navegação se não houver vídeo
      }
    }
  };

  const handleBackFromConversation = () => {
    setShowConversation(false); // Volta para o bloco com quadrados
  };

  const handleVideoEnded = () => {
    setShowVideo(false); // Fecha o vídeo quando ele termina
    setDisableNavigation(false); // Reabilita a navegação após o término do vídeo
  };

  const handleTextComplete = () => {
    setShowTextSequence(false);

    const block = blocks[currentBlock];
    if (block && block.newPhrases) {
      setPhrases(block.newPhrases);
    }
  };

  console.log('showVideo:', showVideo); // Adicione um log para depuração
  console.log('videoSource:', videoSource); // Adicione um log para depuração
  console.log('currentBlock:', currentBlock); // Adicione um log para depuração

  return (
    <div className={`app-container ${!showStartScreen ? 'with-background' : ''}`} style={!showStartScreen ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      {/* Verifica se a tela inicial está ativa */}
      {showStartScreen ? (
        <div className="start-screen">
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
        <>
          {currentBlock === 'blockSquare' && !showConversation ? (
            <SquareGrid squares={blocks['blockSquare'].squares} /> // Usando o componente SquareGrid
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
                <img src={leftImage} alt="Left" className="left-image" />
                <img src={rightImage} alt="Right" className="right-image" />
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
                <TextSequence texts={textToShow} onComplete={handleTextComplete} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
