import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import BillImage from  './assets/Bill/Bill.png'
import CaseBackground from './assets/backgrounds/CasaOtto.png';
import EnteredTheBakeryContinuaVoltaPadaria from './EnteredTheBakeryContinuaVoltaPadaria'

const EnteredTheBakeryContinua2 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'Go away and don’t come back... I don’t want you to be the next.' },
    { quemfala: 'Esquerda', fala: 'Duncan, what are you talking about?' },
    { quemfala: 'Direita', fala: 'I’M BILL, AND I’M SAYING GET OUT, I DON’T WANT TO HURT YOU!' },
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
      <img 
        src={BillImage} 
        alt="Bill" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '350px',
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

export default EnteredTheBakeryContinua2;