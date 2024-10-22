import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import QuartoDuncan from './assets/backgrounds/quarto.png';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseDetailsScene from './LookAtTheNotes'; // O novo componente para a próxima cena

const FirstScene = ({ onBack }) => {
  const [showNextScene, setShowNextScene] = useState(false); // Controle para mostrar a próxima cena

  const dialogues = [
    { quemfala: 'Esquerda', fala: 'How can I be so tired, even drinking coffee to sleep? Looks like it just makes me more exhausted' }
  ];

  const handleTextComplete = () => {
    setShowNextScene(true); // Ao completar o texto, renderiza a próxima cena
  };

  return (
    <div style={{ backgroundImage: `url(${QuartoDuncan})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>
      {!showNextScene ? (
        <>
          <div style={{ padding: '30px', fontSize: "25px", color: "white", textShadow: "1px 0 red, -1px 0 red, 0 1px red, 0 -1px red" }}>
            <p>Getting ready in your room to go to work</p>
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
          <TextSequence
            texts={dialogues}
            onComplete={handleTextComplete} 
            leftName="Duncan"
          />
        </>
      ) : (
        <CaseDetailsScene /> // Renderiza a próxima cena com a ficha técnica
      )}
    </div>
  );
};

export default FirstScene;
