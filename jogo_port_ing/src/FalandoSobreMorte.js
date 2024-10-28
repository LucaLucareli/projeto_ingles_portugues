import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CharlesImage from './assets/Charles/Charles.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import FalandoSobreMorte2 from './FalandoSobreMorte2'

const FalandoSobreMorte = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'Gosh, Who could be so cruel to do it to a person?' },
    { quemfala: 'Esquerda', fala: 'It was a Serial Killer called Bill, unfortunately we know just a little about him. We’re looking for him for years, but in his few and tragic appearances, he just let us with his name, “Bill” written on the floor with the blood of the victim.' },
    { quemfala: 'Direita', fala: 'It can\'t go on like this, I\'m going to avenge my baby... I\'ll be right back, I just need to make one call.' },
    { quemfala: 'Esquerda', fala: 'Ok.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<FalandoSobreMorte2 />);
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
        <p style={{background: "black"}}>➞ Duncan tells Charles about his daughter's death, leaving him in shock.</p>
      </div>
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

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="Charles"
      />
    </div>
  );
};

export default FalandoSobreMorte;