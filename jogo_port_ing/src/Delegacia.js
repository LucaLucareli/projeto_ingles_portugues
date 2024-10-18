import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import DelegaciaCena2 from './DelegaciaCena2';
import CharlesImage from './assets/Charles/Charles.png';

const Delegacia = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Hello Mr., Charles. During my investigation, I found this backpack, and I want to know if you recognize it.' },
    { quemfala: 'Direita', fala: 'It’s Charlotte’s backpack, where did you find it?' },
    { quemfala: 'Esquerda', fala: 'It was hidden in the wall of a dark alleyway. I’ll go there again, I think I’m on the right way.' },
    { quemfala: 'Esquerda', fala: 'What does “Mit Liebel Mama” means?' },
    { quemfala: 'Direita', fala: '“With Love, Mother”, it was the last write of her mother before she passed away...' },
    { quemfala: 'Esquerda', fala: 'My condolences.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<DelegaciaCena2 />);
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
        rightName="Charles"
      />

      <img 
        src={CharlesImage} 
        alt="Charles" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '313px',
          height: 'auto' 
        }} 
      />
    </div>
  );
};

export default Delegacia;
