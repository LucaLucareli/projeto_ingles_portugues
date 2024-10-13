import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/escritorio.jpeg'; 
import DuncanImage from './assets/duncan/Duncan.png';
import CaseFileImage from './assets/centralImage.jpeg'; 
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection'; 
import CharlieScene from './CharlieScene'; // Importando CharlieScene
import EmmaScene from './EmmaScene'; // Importando EmmaScene

const CaseDetailsScene = () => {
  const [showDuncanText, setShowDuncanText] = useState(false); 
  const [textCompleted, setTextCompleted] = useState(false); 
  const [showArrowSelection, setShowArrowSelection] = useState(false); 
  const [choiceMade, setChoiceMade] = useState(false); 
  const [currentScene, setCurrentScene] = useState('caseDetails'); // Estado para controlar a cena

  const handleArrowClick = () => {
    setShowDuncanText(true); 
  };

  const handleTextComplete = () => {
    setTextCompleted(true); 
    setTimeout(() => {
      setShowArrowSelection(true); 
    }, 500);
  };

  const handleSelection = (choiceIndex) => {
    if (choiceIndex === 0) {
      // Altera o estado para navegar para CharlieScene
      setCurrentScene('charlie');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('emma');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "Let’s start the investigation" },
    { quemfala: 'Esquerda', fala: "Hello Girls, how are you doing? I know it’s scary to be in a police station, but it will be fast, also you will help your friend." }
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'charlie') {
    return <CharlieScene />;
  }
  
  if (currentScene === 'emma') {
    return <EmmaScene />; // Renderiza EmmaScene
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>
      {!showDuncanText ? (
        <>
          <div style={{ padding: '20px' }}>
            <h2>Case Details</h2>
            <p>"Here is presented the case file of the daughter of ..."</p>
            <p style={{ fontStyle: 'italic', color: '#fff' }}>{"Player chooses in order which girls to interview."}</p>
          </div>

          <div style={{ 
            overflowY: 'auto', 
            maxHeight: '70vh', 
            margin: '0 auto', 
            width: '70%', 
            border: '2px solid #fff', 
            padding: '10px',
            boxSizing: 'border-box'
          }}>
            <img 
              src={CaseFileImage} 
              alt="Case File" 
              style={{
                width: '100%', 
                height: 'auto'
              }}
            />
          </div>

          <button
            onClick={handleArrowClick}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '10px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            ➡
          </button>
        </>
      ) : (
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
              <p style={{ fontStyle: 'italic', color: '#fff', position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                {"Player chooses in order which girls to interview."}
              </p>
              <ArrowSelection 
                phrases={['Charlie', 'Emma']} 
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
      )}
    </div>
  );
};

export default CaseDetailsScene;
