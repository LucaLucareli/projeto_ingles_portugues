import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import NaRuaConfusoContinuacao from './NaRuaConfusoContinuacao';
import OttoImagem from './assets/Otto/ottok.png';

const NaRuaConfuso = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'DUNCAN! I missed you so much!' },
    { quemfala: 'Esquerda', fala: 'Sorry, I think you stopped the wrong guy, my name is Ford. ' },
    { quemfala: 'Direita', fala: 'Ford? Are you crazy? You’re name is Duncan, and you’re my brother. You must be kidding with me, where did you listen this name, Ford hahaha. Come on, I’m Otto, your older brother.' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<NaRuaConfusoContinuacao />);
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
        src={OttoImagem} 
        alt="Otto" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '500px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Ford"
        rightName="???"
      />
    </div>
  );
};

export default NaRuaConfuso;