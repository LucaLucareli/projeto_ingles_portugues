import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/Ford/Fordz.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'
import Shot from './assets/shot.mp3'

const Investigate2 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'Otto, what are you doing?' },
    { quemfala: 'Esquerda', fala: 'I’m doing justice for my parents that you killed, you’re a monster and deserve all the worst. Bye, and I hope to never see you again.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const audio = new Audio(Shot);

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

export default Investigate2;