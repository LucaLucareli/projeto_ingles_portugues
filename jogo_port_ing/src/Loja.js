import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/loja.png';
import Rua from './Rua';
import AttendantImage from './assets/Attendant/Attendant.png';

const Loja = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Hi, were you here last night? I’m Detective Duncan, I’m investigating a disappearance and need to know if you saw anything strange happening near the library.' },
    { quemfala: 'Direita', fala: 'Hi, I work until 7 p.m. someone else works the night shift. When I left, the bar was busy, and the library was still open.' },
    { quemfala: 'Esquerda', fala: 'Thank you, bye.'}
  ]);

  const newDialogues = [
    { quemfala: 'Esquerda', fala: "That information didn't get me anywhere... I'll keep walking and think of something better." },
  ];

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<Rua />);
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

<div style={{ padding: '10px', fontSize: "25px", color: "white", textShadow: "1px 0 red, -1px 0 red, 0 1px red, 0 -1px red" }}>
        <p>Continuing down the street, he finds a 24-hour convenience store. Upon entering the store, he asks a few questions.
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
        rightName={textCompleted ? null : "Attendant"}
      />

      <img 
        src= {textCompleted ? '' : AttendantImage} 
        alt="Attendant" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '250px',
          height: 'auto' 
        }} 
      />
    </div>
  );
};

export default Loja;
