import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import SusanImage from './assets/Susan/Susan.png';
import CaseBackground from './assets/backgrounds/rua.png';
import EnteredTheBakeryContinua from './EnteredTheBakeryContinua'

const EnteredTheBakery = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Hello Susan, good afternoon.' },
    { quemfala: 'Direita', fala: 'Hi Otto, the same as always?' },
    { quemfala: 'Esquerda', fala: 'Of course, baby!' },
    { quemfala: 'Direita', fala: 'Not here, Otto. And when are we going to go out again?' },
    { quemfala: 'Esquerda', fala: 'Maybe this weekend?' },
    { quemfala: 'Direita', fala: 'For me, ok!' },
    { quemfala: 'Esquerda', fala: 'Ok, see you at 6p.m., at the same restaurant.' },
    { quemfala: 'Direita', fala: 'I’ll be there! And here are your cookies, Sr.' },
    { quemfala: 'Esquerda', fala: 'Thanks!' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EnteredTheBakeryContinua />);
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
        src={SusanImage} 
        alt="Susan" 
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
        rightName="Susan"
      />
    </div>
  );
};

export default EnteredTheBakery;