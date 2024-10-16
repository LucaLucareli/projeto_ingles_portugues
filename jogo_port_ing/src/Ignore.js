import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/duncan/duncank.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'

const Ignore = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Let’s ignore this sound, I already have a lot to worry.' },
    { quemfala: 'Direita', fala: 'Yeah, take a break.' },
  
    { quemfala: 'Direita', fala: 'I think that someone who get out of the alleyway is following us...' },
    { quemfala: 'Direita', fala: 'He took a gun, RUN OTTO, RUN!' },
    { quemfala: 'Esquerda', fala: 'Oh my gosh.' },
    { quemfala: 'Direita', fala: 'He’s away from us Otto, will be everything ok...' },
  
    { quemfala: 'Direita', fala: '...' },
    { quemfala: 'Esquerda', fala: 'Duncan! Are you ok? I think the car hit you... But you deserved it. You killed our parents, I hope you die...' }
  ]);

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
          width: '300px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default Ignore;