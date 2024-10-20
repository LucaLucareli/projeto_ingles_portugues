import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/quarto.png';
import AcordaDelegacia from './AcordaDelegacia'

const CasaNoite = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Finally, I’m home. I’ll have dinner, drink my coffee and sleep, I’m very tired.' },
  ]);


  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<AcordaDelegacia />);
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
      <div style={{ padding: '150px 30px 30px', fontSize: "25px", color: "white", textShadow: "1px 0 red, -1px 0 red, 0 1px red, 0 -1px red" }}>
        <p>Arriving home, Duncan will have dinner and coffee before bed, as usual.</p>
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

        {/* Texto de narração que aparece após o primeiro diálogo */}
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo preto com transparência
          padding: '10px', // Adiciona um espaçamento interno
          border: '2px solid red', // Borda vermelha
          borderRadius: '10px', // Borda arredondada para um visual mais suave
          maxWidth: '80%', // Limita a largura do texto
          textAlign: 'center', // Centraliza o texto
          fontSize: '30px'
        }}>
          Unlocked Memory: 
          When he was a child, his mother baked butter cookies with coffee, for him and his brother, at the weekends. So coffee brings him to best moments of his life. Also after older, coffee helped him to sleep.
        </p>

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default CasaNoite;