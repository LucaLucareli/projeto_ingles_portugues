import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/escritorio.png';
import Floricultura from './Floricultura';

const LookAtTheNotes = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([
    { quemfala: 'Esquerda', fala: 'If it is here, I can take a look.' },
  ]);

  const newDialogues = [
    { quemfala: 'Esquerda', fala: 'I didn’t expect this. That’s why she had that written in her backpack... Anyway, these notes are probably going to help me. Maybe I can find a reason why someone did it to Charlotte.' },
  ];

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true);
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]);
      }, 500);
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
      {textCompleted && (
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '10px', 
          border: '2px solid red', 
          borderRadius: '10px', 
          maxWidth: '80%', 
          textAlign: 'center', 
          fontSize: '30px'
        }}>
          Unlocked Memory: 
          Duncan remembers the moment when his parents died because of German soldiers. This makes him feel angry and more suspicious about this man.
        </p>
      )}

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
