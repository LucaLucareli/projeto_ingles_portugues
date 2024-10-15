import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import CaseBackground from './assets/backgrounds/escritorio.png';
import NotEnteredTheBakeryContinua from './NotEnteredTheBakeryContinua';
import CedricImage from './assets/Cedric/Cedric.png'
import DuncanImage from './assets/duncan/duncank.png'

const NotEnteredTheBakery = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'I’m...going to die... but I don’t...  regret killing this bitch that you call mother...' },
  ]);

    const newDialogues = [
      { quemfala: 'Direita', fala: 'YOU’RE A MONSTER! I’LL KILL YOU!' },
      { quemfala: 'Esquerda', fala: 'Duncan, DON’T DO THIS!' },
      { quemfala: 'Esquerda', fala: 'He deserved it...' },
      { quemfala: 'Direita', fala: 'You killed him... What is happening here??' },
      { quemfala: 'Esquerda', fala: 'I don’t know, but I don’t want you to be the next, so it’s better you get out.' },
      { quemfala: 'Direita', fala: 'What? Get out?' }
    ];
  

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Altera para os novos diálogos após um pequeno delay
      }, 500); // Ajuste o tempo conforme necessário
    } else {
      setTimeout(() => {
        setNextScene(<NotEnteredTheBakeryContinua />);
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
        src={textCompleted ? DuncanImage : CedricImage} 
        alt={textCompleted ? "Duncan" : "Cedric"} 
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
        rightName= {textCompleted ? "Duncan" : "Cedric"}
      />
    </div>
  );
};

export default NotEnteredTheBakery;