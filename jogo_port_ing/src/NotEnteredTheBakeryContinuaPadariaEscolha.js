import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/Lugar.png';
import OttoImage from './assets/Otto/Otto.png';
import DuncanImage from './assets/Ford/Fordz.png';
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';
import NotEnteredTheBakeryContinuaPadariaEscolhaIgnore from  './NotEnteredTheBakeryContinuaPadariaEscolhaIgnore'
import NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate from  './NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate'

const EnteredTheBakeryContinuaVoltaPadariaCorversaDuncanCafeteria = () => {
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
      setCurrentScene('Investigate');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('Ignore');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: 'Did you listen it?' },
    { quemfala: 'Direita', fala: 'That strange noise?' },
    { quemfala: 'Esquerda', fala: 'Yes.' },
    { quemfala: 'Direita', fala: 'What should I do?' },
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'Ignore') {
    return <NotEnteredTheBakeryContinuaPadariaEscolhaIgnore />;
  }
  
  if (currentScene === 'Investigate') {
    return <NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate />; 
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>

        <>
          {!textCompleted && (
            <>
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
                    <img 
                      src={DuncanImage} 
                      alt="Duncan" 
                      style={{ 
                        position: 'absolute', 
                        right: '20px',
                        bottom: '0px',
                        width: '300px',
                        height: 'auto' 
                      }} 
                    />

              <TextSequence 
                texts={duncanDialogue}
                onComplete={handleTextComplete} 
                leftName="Otto"
                rightName="Duncan"
              />
            </>
          )}

          {textCompleted && !choiceMade && (
            <>
              <ArrowSelection 
                phrases={['Investigate', 'Ignore']} 
                onSelection={handleSelection} 
                disableNavigation={false} 
              />
            </>
          )}

          {textCompleted && (
                  <><img
            src={OttoImage}
            alt="Otto"
            style={{
              position: 'absolute',
              left: '20px',
              bottom: '0px',
              width: '300px',
              height: 'auto'
            }} /><img
              src={DuncanImage}
              alt="Duncan"
              style={{
                position: 'absolute',
                right: '20px',
                bottom: '0px',
                width: '300px',
                height: 'auto'
              }} /></>
          )}
        </>
      
    </div>
  );
};

export default EnteredTheBakeryContinuaVoltaPadariaCorversaDuncanCafeteria;
