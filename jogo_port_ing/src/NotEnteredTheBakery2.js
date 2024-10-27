import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import CaseBackground from './assets/backgrounds/CasaOtto.png';
import NotEnteredTheBakeryContinua from './NotEnteredTheBakeryContinua';
import DuncanImage from './assets/duncan/duncank.png'

const NotEnteredTheBakery2 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'YOU’RE A MONSTER! I’LL KILL YOU!' },
    { quemfala: 'Esquerda', fala: 'Duncan, DON’T DO THIS!' },
    { quemfala: 'Esquerda', fala: 'He deserved it...' },
    { quemfala: 'Direita', fala: 'You killed him... What is happening here??' },
    { quemfala: 'Esquerda', fala: 'I don’t know, but I don’t want you to be the next, so it’s better you get out.' },
    { quemfala: 'Direita', fala: 'What? Get out?' }
  ]);
  

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues]); // Altera para os novos diálogos após um pequeno delay
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

<div style={{ padding: '30px 30px 30px', fontSize: "30px", color: "white", width: "fit-content" }}>
        <p style={{background: "black"}}>➞ Otto goes his normal way and arrives home.</p>
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
        src={DuncanImage } 
        alt={"Duncan" } 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: "500px",
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Otto"
        rightName= {"Duncan"}
      />
    </div>
  );
};

export default NotEnteredTheBakery2;