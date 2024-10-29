import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/Ford/Fordz.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'
import Ambulancia from './assets/ambulance.mp3'

const NotEnteredTheBakeryContinuaPadariaEscolhaIgnore = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Let’s ignore this sound, I already have a lot to worry.' },
    { quemfala: 'Direita', fala: 'Yeah, take a break.' },
  
    { quemfala: 'Direita', fala: 'I think someone that got out of the alleyway is following us...' },
    { quemfala: 'Direita', fala: 'He has a gun, RUN OTTO, RUN!' },
    { quemfala: 'Esquerda', fala: 'Oh, my gosh.' },
    { quemfala: 'Direita', fala: 'He’s away from us Otto. Everything is gonna be ok...' },
    { quemfala: 'Esquerda', fala: 'STOP DUNCAN, THE CAR!' },
  
    { quemfala: 'Direita', fala: '...' },
    { quemfala: 'Esquerda', fala: 'Duncan! Are you ok? WAKE UP BROTHER! SOMEONE HELP, PLEASE!!' }
  ]);

  const audio = new Audio(Ambulancia);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      audio.play();
      setTimeout(() => {
        setNextScene(<Fim />);
      }, 500);
    }
  };

  if (nextScene) {
    return nextScene;
  }

  return (
    <div style={{ 
      backgroundImage: `url(${CaseBackground})`, 
      backgroundSize: 'cover', 
      height: '100vh', 
      color: '#fff', 
      position: 'relative', 
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <img 
        src={OttoImage} 
        alt="Otto" 
        style={{ 
          position: 'absolute', 
          left: '20px',
          bottom: '0px',
          width: '300px',
          height: 'auto' 
        }} 
      />
      <img 
        src={duncanImage} 
        alt="Duncan" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '300px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Otto"
        rightName="Duncan"
      />
    </div>
  );
};

export default NotEnteredTheBakeryContinuaPadariaEscolhaIgnore;