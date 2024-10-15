import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/CasaFitima.png';
import DuncanImage from './assets/duncan/Duncan.png';
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';
import Superiors from './Superiors'
import GroundFloor from './GroundFloor'

const PredioEscolhaEs = () => {
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
      setCurrentScene('Superiors');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('Ground floor');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "Now that I’m in, I have a lot to look, Where should I start? With the top floors or with the ground floor?" }
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'Ground floor') {
    return <GroundFloor />;
  }
  
  if (currentScene === 'Superiors') {
    return <Superiors />; // Renderiza EmmaScene
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
                phrases={['Superiors', 'Ground floor']} 
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

export default PredioEscolhaEs;
