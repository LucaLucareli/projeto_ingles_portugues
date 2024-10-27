import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import SusanImage from './assets/Susan/Susan.png'
import CaseBackground from './assets/backgrounds/loja2.png';
import EnteredTheBakeryContinuaVoltaPadariaCorversaDuncan from  './EnteredTheBakeryContinuaVoltaPadariaCorversaDuncan'

const EnteredTheBakeryContinuaPadaria = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Baby, I don’t know what happened in my house... I need you!' },
    { quemfala: 'Direita', fala: 'Ok, calm down, you can stay at my place for the time you need.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EnteredTheBakeryContinuaVoltaPadariaCorversaDuncan />);
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
   <div style={{ padding: "30px", fontSize: "30px", color: "white", width: "fit-content" }}>
                <p style={{background: "black"}}>➞ Otto fled to the bakery
                </p>
              </div>
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

export default EnteredTheBakeryContinuaPadaria;