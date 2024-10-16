import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import CaseBackground from './assets/backgrounds/CasaOtto.png';
import EnteredTheBakeryContinuaVoltaPadaria from './EnteredTheBakeryContinuaVoltaPadaria'

const EnteredTheBakeryContinua = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Brother, what are you doing??' },
    { quemfala: 'Esquerda', fala: 'What?' },
    { quemfala: 'Esquerda', fala: 'Duncan, what are you talking about?' },
    { quemfala: 'Esquerda', fala: 'My brother is a monster, he killed both, but why? If it was just Cedric, it would make sense, but both? I don’t even recognize my brother anymore...' },
    { quemfala: 'Direita', fala: 'Go away and don’t come back... I don’t want you to be the next.' },
    { quemfala: 'Direita', fala: 'I’M BILL, AND I’M SAYING GET OUT, I DON’T WANT TO HURT YOU!' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EnteredTheBakeryContinuaVoltaPadaria />);
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

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Otto"
        rightName="Bill"
      />
    </div>
  );
};

export default EnteredTheBakeryContinua;