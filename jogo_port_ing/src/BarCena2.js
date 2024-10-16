import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/Bar.png';
import Loja from './Loja'

const BarCena2 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [showMemoryPrompt, setShowMemoryPrompt] = useState(true); // Controla a exibição da frase inicial
  const [memoryUnlocked, setMemoryUnlocked] = useState(false); // Controla a exibição da memória desbloqueada
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Losing another case to Ford... that was a tough day' },
    { quemfala: 'Esquerda', fala: "I don't even like drinking, but that day it seemed like the only solution." }
  ]);

  const newDialogues = [
    { quemfala: 'Esquerda', fala: 'Could I have seen her passing? Amnesia... or maybe I just drank too much. I need to find a way to overcome this memory lapse.' },
  ];

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setShowMemoryPrompt(false); // Remove o texto de memória inicial
      setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Insere os novos diálogos
      setMemoryUnlocked(true); // Exibe a memória desbloqueada
    } else {
      setTimeout(() => {
        setNextScene(<Loja />);
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

      {/* Exibe a frase antes do primeiro diálogo */}
      {showMemoryPrompt && (
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '10px', 
          border: '2px solid red', 
          borderRadius: '10px', 
          maxWidth: '80%', 
          textAlign: 'center'
        }}>
          Duncan looks at the bar, and the memory comes flooding back:
        </p>
      )}

      {/* Memória desbloqueada após a conclusão do primeiro diálogo */}
      {memoryUnlocked && (
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '80px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 2, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '10px', 
          border: '2px solid red', 
          borderRadius: '10px', 
          maxWidth: '80%', 
          textAlign: 'center'
        }}>
          Unlocked Memory: 
          Duncan doesn’t feel confortable drinking, because of his step father. While he was drunk, he was violent and hitted his mother, also when Duncan drinks, most of the times he doesn’t remember anything of the last night.
          He just drinks if he’s completly exhausted.
        </p>
      )}

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default BarCena2;
