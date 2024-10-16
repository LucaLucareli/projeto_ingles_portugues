import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/CasaFitima.png';
import OttoImage from './assets/Otto/Otto.png';
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';
import NotEnteredTheBakery from './NotEnteredTheBakery';
import EnteredTheBakery from './EnteredTheBakery';

const ProtaOtto = () => {
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
      setCurrentScene('Entered the bakery');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('did not enter bakery');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "I’m a little late, because a promise to make the dinner today, but if I go to the bakery and buy some of those cookies for my Mother and Duncan?" },
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'did not enter bakery') {
    return <NotEnteredTheBakery />;
  }
  
  if (currentScene === 'Entered the bakery') {
    return <EnteredTheBakery />; 
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>

        <>
          {!textCompleted && (
            <>
              <img 
                src={OttoImage} 
                alt="Duncan" 
                style={{ 
                  position: 'absolute', 
                  left: '20px',
                  bottom: '0px',
                  width: '300px',
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
                phrases={['Entered the bakery', 'did not enter bakery']} 
                onSelection={handleSelection} 
                disableNavigation={false} 
              />
            </>
          )}

          {textCompleted && (
            <img 
              src={OttoImage} 
              alt="Otto" 
              style={{ 
                position: 'absolute', 
                left: '20px',
                bottom: '0px',
                width: '300px',
                height: 'auto'
              }} 
            />
          )}
        </>
      
    </div>
  );
};

export default ProtaOtto;
