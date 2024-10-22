import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/CasaFitima.png';
import PredioEscolha from './PredioEscolha'
import YoungLady from './assets/YoungWoman/younglady.png'

const EscolhaHome = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'Hello, how can I help you?' },
    { quemfala: 'Esquerda', fala: 'Hello, good morning, Did you move recently?' },
    { quemfala: 'Direita', fala: 'Yes, me and my husband just moved on, we arrived here last night. Right now we are cleaning everything so we can bring our things. But why do you want to know it?' },
    { quemfala: 'Esquerda', fala: "I'm a detective, and I'm investigating a disappearance, I'd just to know if you saw some different movement around here these days." },
    { quemfala: 'Direita', fala: "Like I said, I just moved on, in theses two days I didn't see anything suspicious." },
    { quemfala: 'Esquerda', fala: 'Ok, thanks for your help.' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<PredioEscolha />);
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
        src={DuncanImage} 
        alt="Duncan" 
        style={{ 
          position: 'absolute', 
          left: '20px',
          bottom: '0px',
          width: '500px',
          height: 'auto' 
        }} 
      />

      <img 
        src={YoungLady} 
        alt="Young Lady" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '450px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="Young Lady"
      />
    </div>
  );
};

export default EscolhaHome;