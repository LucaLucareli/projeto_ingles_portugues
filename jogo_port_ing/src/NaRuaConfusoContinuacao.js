import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import OttoImagem from './assets/Otto/ottok.png';
import CaseBackground from './assets/backgrounds/rua.png';
import ProtaOtto from './ProtaOtto'

const NaRuaConfusoContinuacao = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'OTTO, where were you??? I missed you so much, you disappeared for 10 years.' },
    { quemfala: 'Direita', fala: 'I run away, like you said.' },
    { quemfala: 'Esquerda', fala: 'I said? When? Mother and Cedric run away with you?' },
    { quemfala: 'Direita', fala: 'What are you talking about? They’re dead...' },
    { quemfala: 'Esquerda', fala: 'What? I investigated this case for years, and I didn’t find anything that could help me to understand what happened to all of you.' },
    { quemfala: 'Direita', fala: 'Don’t you remember anything about that night, right?' },
    { quemfala: 'Esquerda', fala: 'What night?' },
    { quemfala: 'Direita', fala: 'The accident with Mother and Father?' },
    { quemfala: 'Esquerda', fala: 'Accident? For me, all was a mystery, you just let me alone, waiting for you to come back...' },
    { quemfala: 'Direita', fala: 'I will tell you what happened...' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<ProtaOtto />);
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
          width: '300px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="Otto"
      />
    </div>
  );
};

export default NaRuaConfusoContinuacao;