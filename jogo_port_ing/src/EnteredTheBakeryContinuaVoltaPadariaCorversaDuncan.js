import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/duncan/duncank.png'
import CaseBackground from './assets/backgrounds/escritorio.png';
import EnteredTheBakeryContinuaVoltaPadariaCorversaDuncanCafeteria from './EnteredTheBakeryContinuaVoltaPadariaCorversaDuncanCafeteria'

const EnteredTheBakeryContinuaVoltaPadariaCorversaDuncan = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'I’m a monster... I did all of that bad things... I’m the Serial Killer.' },
    { quemfala: 'Esquerda', fala: 'Calm down Duncan, I’m here, let’s go take a coffee to you think and talk about it.' },
    { quemfala: 'Direita', fala: 'Ok, maybe it will help a bit. Wait, you said that I told you my name was Ford?' },
    { quemfala: 'Esquerda', fala: 'Yeah, I don’t know what happen, but you kind of looked like another person...' },
    { quemfala: 'Direita', fala: 'I’m also him... I don’t know myself anymore.' },
    { quemfala: 'Esquerda', fala: 'That’s why you’re taking a break.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EnteredTheBakeryContinuaVoltaPadariaCorversaDuncanCafeteria />);
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
          width: '500px',
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
          width: '500px',
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

export default EnteredTheBakeryContinuaVoltaPadariaCorversaDuncan;