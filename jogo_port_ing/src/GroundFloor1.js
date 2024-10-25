import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
// import andarVazio from './assets/backgrounds/andarVazio.png'; // Sala vazia
import AndarTapete from './assets/backgrounds/portaFechada.png'; // Sala com tapete
//import portaAberta from './assets/backgrounds/portaAberta.png'; // Porta aberta
// import DescobertaDoCorpo from './assets/backgrounds/AssinaturaBill.png'; // Descoberta do corpo
import GroundFloor2 from './GroundFloor2';


const GroundFloor1 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: "HERE'S A CARPET" },
    { quemfala: 'Esquerda', fala: 'Why did I scream? I can’t show that I’m here. What if the bad guy is still here?' },
    { quemfala: 'Esquerda', fala: 'NOTHING? YOU\'VE GOT TO BE KIDDING ME. Calm down, Duncan, you might have let something pass, but what? That frame... yeah, might be it, it’s big enough to hide something, how didn’t I thought about it before?' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<GroundFloor2 />);
      }, 500);
    }
  };

  if (nextScene) {
    return nextScene;
  }

  return (
    <div style={{ 
      backgroundImage: `url(${AndarTapete})`, 
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

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default GroundFloor1;