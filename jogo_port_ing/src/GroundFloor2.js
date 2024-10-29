import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
// import andarVazio from './assets/backgrounds/andarVazio.png'; // Sala vazia
// import AndarTapete from './assets/backgrounds/andar.png'; // Sala com tapete
import portaAberta from './assets/backgrounds/portaAberta.png'; // Porta aberta
//import DescobertaDoCorpo from './assets/backgrounds/AssinaturaBill.png'; // Descoberta do corpo
import GroundFloor3 from './GroundFloor3';
import IronDoor from './assets/door.mp3'


const GroundFloor2 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'I knew that I would find something here. But the little door is closed, why didn’t I bring my tools?' },
    { quemfala: 'Esquerda', fala: 'What if I punch it...? Look, it worked, and the rust helped me.' }
  ]);

  const audio = new Audio(IronDoor);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
      audio.play();
    } else {
      setTimeout(() => {
        setNextScene(<GroundFloor3 />);
      }, 500);
    }
  };

  if (nextScene) {
    return nextScene;
  }

  return (
    <div style={{ 
      backgroundImage: `url(${portaAberta})`, 
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

export default GroundFloor2;