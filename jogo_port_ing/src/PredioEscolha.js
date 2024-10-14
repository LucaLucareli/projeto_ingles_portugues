import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/CasaEscolha.png';
import DuncanImage from './assets/duncan/Duncan.png';
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';

const PredioEscolha = () => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [showArrowSelection, setShowArrowSelection] = useState(false); 
  const [choiceMade, setChoiceMade] = useState(false); 
  const [currentScene, setCurrentScene] = useState('caseDetails'); // Estado para controlar a cena


  const handleTextComplete = () => {
    setTextCompleted(true); 
    setTimeout(() => {
      setShowArrowSelection(true); 
    }, 500);
  };

  const handleSelection = (choiceIndex) => {
    if (choiceIndex === 0) {
      // Altera o estado para navegar para CharlieScene
      setCurrentScene('Look around');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('Police Station');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "Ainda sem fala" },
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'Police Station') {
    return <PredioEscolha />;
  }
  
  if (currentScene === 'Look around') {
    return <PredioEscolha />; // Renderiza EmmaScene
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>

        <>
          {!textCompleted && (
            <>
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
                texts={duncanDialogue}
                onComplete={handleTextComplete} 
                leftName="Duncan"
              />
            </>
          )}

          {textCompleted && !choiceMade && (
            <>
              <ArrowSelection 
                phrases={['Look around', 'Police Station']} 
                onSelection={handleSelection} 
                disableNavigation={false} 
              />
            </>
          )}

          {textCompleted && (
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
          )}
        </>
      
    </div>
  );
};

export default PredioEscolha;
