import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/quarto.png';
import NaRuaConfuso from './NaRuaConfuso';

const EmCasaDepoisDoCaso = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Finally at home, I’ll take a shower and sleep...' },
    { quemfala: 'Esquerda', fala: 'What time is it? 4 a.m? If I had drank me coffee, I’d just wake up at 8 a. m.. I’ll drink my coffee right know.' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<NaRuaConfuso />);
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
      <p style={{background: "black"}}>➞ After a long day, Duncan goes home, takes a shower and goes to sleep immediately. 
      </p>
      <p style={{background: "black"}}>➞ In the middle of the night, he wakes up thinking that if he had drunk coffee, he would have slept straight away.
      </p>
      <p style={{background: "black"}}>➞ He goes downstairs, drinks two cups of coffee and goes back to bed.        
      </p>
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

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default EmCasaDepoisDoCaso;