import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/Lugar.png';
import OttoImage from './assets/Otto/Otto.png';
import DuncanImage from './assets/Ford/Fordz.png'
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';
import Ignore from  './Ignore'
import Investigate from  './Investigate'

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
      setCurrentScene('Ignore');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('Investigate');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: 'Have you heard that strange noise?' },
    { quemfala: 'Esquerda', fala: 'Yes.' },
    
    { quemfala: 'Direita', fala: 'What should I do?' },
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'Ignore') {
    return <Ignore />;
  }
  
  if (currentScene === 'Investigate') {
    return <Investigate />; 
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>

        <>
          {!textCompleted && (
            <>

<div style={{ padding: "30px", fontSize: "30px", color: "white", width: "fit-content" }}>
                      <p style={{background: "black"}}>➞ 
                      The two are walking towards the coffee shop, and they pass through an alley. They hear a strange noise coming from this alley. 
                      </p>
                      <p style={{background: "black"}}>➞ 
                      As Duncan is always attentive to these details, he stays alert and thinks about investigating.
                      </p>

                   </div>
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
                phrases={['Ignore', 'Investigate']} 
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
