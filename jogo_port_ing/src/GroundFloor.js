import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
// import andarVazio from './assets/backgrounds/andarVazio.png'; // Sala vazia
import AndarTapete from './assets/backgrounds/andarVazio.png'; // Sala com tapete
//import portaAberta from './assets/backgrounds/portaAberta.png'; // Porta aberta
// import DescobertaDoCorpo from './assets/backgrounds/AssinaturaBill.png'; // Descoberta do corpo
import GroundFloor1 from './GroundFloor1';


const GroundFloor = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'There are a lot of rooms, I’m going to look at all with so much attention.' },
    { quemfala: 'Esquerda', fala: 'Why are all of the spaces empty? I almost finished, and I didn’t find any sign! No steps in the dusty, no furniture or any kind of thing that could hide something...' },
    { quemfala: 'Esquerda', fala: 'What’s happening to me? Have I missed some hint? Have I come to the wrong floriculture? Have I become bad at the only good thing that I’m left with?' },
    { quemfala: 'Esquerda', fala: 'Stop thinking about this, focus because there’s still one more room. There MUST have something there.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<GroundFloor1 />);
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

export default GroundFloor;