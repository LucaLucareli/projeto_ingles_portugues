import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/escritorio.png';
import Floricultura from  './Floricultura'

const LookAtTheNotes = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'If it is here, I can take a look.' },
    { quemfala: 'Esquerda', fala: 'I didn’t expected this. That’s why she had that write in her backpack... Anyway, these notes are probably going to help me, maybe I can find a reason why someone did it to Charlotte.' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<Floricultura />);
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

        {/* Texto de narração que aparece após o primeiro diálogo */}
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo preto com transparência
          padding: '10px', // Adiciona um espaçamento interno
          border: '2px solid red', // Borda vermelha
          borderRadius: '10px', // Borda arredondada para um visual mais suave
          maxWidth: '80%', // Limita a largura do texto
          textAlign: 'center' // Centraliza o texto
        }}>
          Unlocked Memory: 
          Duncan remember the moment that his parents died because of the German Soldiers, it makes him feel angry and mor suspicious about this man.
        </p>

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default LookAtTheNotes;