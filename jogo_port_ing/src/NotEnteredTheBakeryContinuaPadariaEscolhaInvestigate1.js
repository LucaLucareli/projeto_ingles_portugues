import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import JamesImage from './assets/James/James.png'
import duncanImage from './assets/Ford/Ford.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'

const NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate1 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 

    { quemfala: 'Esquerda', fala: 'Thank you brother, it was amazing, I can deal from here.' },
    { quemfala: 'Esquerda', fala: 'So, who are you? And what do you want?' },
    { quemfala: 'Direita', fala: 'I wanted to kill you, you arrested my father...' },
    { quemfala: 'Esquerda', fala: 'Charles has another child? I didn’t expect that, but anyway, you will be next to your dad in jail.' }
  ])

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
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
        src={duncanImage} 
        alt="Duncan" 
        style={{ 
          position: 'absolute', 
          left: '20px',
          bottom: '0px',
          width: '300px',
          height: 'auto' 
        }} 
      />
      <img 
        src={JamesImage} 
        alt="James" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '280px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="???"
      />
    </div>
  );
};

export default NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate1;