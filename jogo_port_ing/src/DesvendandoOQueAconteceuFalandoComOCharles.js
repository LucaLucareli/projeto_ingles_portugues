import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CharlesImage from './assets/Charles/Charles.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import EmCasaDepoisDoCaso from './EmCasaDepoisDoCaso'

const DesvendandoOQueAconteceuFalandoComOCharles = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Hello, Mr. Charles, Could you come here?' },
    { quemfala: 'Direita', fala: 'Of course, is it about my daughter?' },
    { quemfala: 'Esquerda', fala: 'I’ll explain everything here...' },
    { quemfala: 'Esquerda', fala: 'Mr. Charles, you’re being arrested for aiding and abetting Nazi soldiers.' },
    { quemfala: 'Direita', fala: 'Wait, what?' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EmCasaDepoisDoCaso />);
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
        src={CharlesImage} 
        alt="Charles" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '313px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="Charles"
      />
    </div>
  );
};

export default DesvendandoOQueAconteceuFalandoComOCharles;