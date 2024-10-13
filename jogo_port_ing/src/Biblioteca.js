import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/biblioteca.jpg';
import Investigacao from './Investigacao';

const Biblioteca = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esuquerda', fala: 'Her house is just 500 meters away from the library... it should have been an easy route.' },
    { quemfala: 'Esuquerda', fala: 'I think something happened along the way. I need to investigate more thoroughly.' }
  ]);
  
  const [nextScene, setNextScene] = useState(null); // Estado para armazenar a próxima cena

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true);
      // Atualiza o estado para renderizar a cena de Investigacao após um pequeno delay
      setTimeout(() => {
        setNextScene(<Investigacao />);
      }, 500);
    }
  };

  // Se nextScene não é null, renderiza a cena de Investigacao
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
      boxSizing: 'border-box' 
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
      
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default Biblioteca;
