import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/Bar.png';
import Bar from './Bar';

const Biblioteca = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Her house is just 1km away from the library... it should have been an easy route.' },
    { quemfala: 'Esquerda', fala: 'I think something happened along the way. I need to investigate more thoroughly.' }
  ]);

  const newDialogues = [
    { quemfala: 'Esquerda', fala: 'I turned right twice, just as her friend described.' },
    { quemfala: 'Esquerda', fala: 'This is where she split off from her friend... The girl turned right, and the other one kept going straight.' },
    { quemfala: 'Esquerda', fala: 'And that bar across the street... I need to check it out.' }
  ];
  
  const [nextScene, setNextScene] = useState(null); // Estado para gerenciar a transição de cena

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Altera para os novos diálogos após um pequeno delay
      }, 500); // Ajuste o tempo conforme necessário
    } else {
      setTimeout(() => {
        setNextScene(<Bar Biblioteca/>);
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

       {/* Texto de narração que aparece após o primeiro diálogo */}
       {textCompleted && (
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
          Always when Duncan needs to follow the steps of someone, he remembers his childhood, when he played Detective with his brother.
        </p>
      )}
      
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
      />
    </div>
  );
};

export default Biblioteca;
