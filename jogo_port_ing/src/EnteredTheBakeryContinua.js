import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import BillImage from  './assets/duncan/duncank.png'
import CaseBackground from './assets/backgrounds/CasaOtto.png';
import EnteredTheBakeryContinua2 from './EnteredTheBakeryContinua2'

const EnteredTheBakeryContinua = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Brother, what are you doing??' },
    { quemfala: 'Direita', fala: 'Otto, run!' },
    { quemfala: 'Esquerda', fala: 'What?' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<EnteredTheBakeryContinua2 />);
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

<div style={{ padding: '30px 30px 30px', fontSize: "30px", color: "white", width: "fit-content" }}>
        <p style={{background: "black"}}>➞ Otto follows his normal path and arrives home.
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
        src={BillImage} 
        alt="Bill" 
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

export default EnteredTheBakeryContinua;