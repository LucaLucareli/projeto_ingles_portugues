import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/Predio.png';
import Black from  './Black'

const LookAround = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'What is this sound? It’s coming from the dumpster... Oh, it’s just a mouse.' },
    { quemfala: 'Esquerda', fala: 'But what do we have down here... Is it a trapdoor?' },
    { quemfala: 'Esquerda', fala: 'I think the last person who passed here, forget to close it...' },
    { quemfala: 'Esquerda', fala: 'It’s really dark, I’ll need to use my flashlight. Let’s see where this way takes me.' },
    { quemfala: 'Esquerda', fala: 'Voila, I’m in.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<Black />);
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
              <div style={{ padding: '30px', fontSize: "25px", color: "white", textShadow: "1px 0 red, -1px 0 red, 0 1px red, 0 -1px red" }}>
        <p>Duncan hears a noise coming from a dumpster and, upon investigating, realizes it's just a mouse.
        </p>
        <p>
        When pushing the bucket, he discovers a hidden wooden trapdoor.
        </p>
        <p>
        With the flashlight, he goes down a dark corridor and finds a staircase, which takes him inside the abandoned building.
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

export default LookAround;