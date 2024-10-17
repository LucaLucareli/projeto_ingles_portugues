import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/escritorio.png'; 
import DuncanImage from './assets/duncan/Duncan.png';
import CaseFileImage from './assets/Arquivo.png'; 
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection'; 
import NotLookAtTheNotes from './NotLookAtTheNotes'; // Importando CharlieScene
import LookAtTheNotes from './LookAtTheNotes'; // Importando EmmaScene

const MaisInformacoesCaso = () => {
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
      setCurrentScene('Look at the notes');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('Not look at the notes');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "WHAT??? IS HE IN MY CASE AGAIN?Now it’s a competition. Win whoever discovers what happened first." },
    { quemfala: 'Esquerda', fala: "What if I take a look at his notes?" }
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'Not look at the notes') {
    return <NotLookAtTheNotes />;
  }
  
  if (currentScene === 'Look at the notes') {
    return <LookAtTheNotes />; // Renderiza EmmaScene
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>
      {!showDuncanText ? (
        <>
          <div style={{ padding: '20px' }}>
            <h2> </h2>
            <p> </p>
            <p style={{ fontStyle: 'italic', color: '#fff' }}>{""}</p>
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
              <ArrowSelection 
                phrases={['Look at the notes', 'Not to look notes']} 
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

export default MaisInformacoesCaso;
