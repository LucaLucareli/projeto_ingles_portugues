import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/escritorio.png'; 
import DuncanImage from './assets/duncan/Duncan.png';
import CaseFileImage from './assets/Arquivo.png'; 
import TextSequence from './components/text-sequence'; 
import Floricultura from './Floricultura';

const EscreveuNaMochila = () => {
  const [showDuncanText, setShowDuncanText] = useState(false); 
  const [textCompleted, setTextCompleted] = useState(false); 
  const [nextScene, setNextScene] = useState(null);

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "I didn’t expect this. That’s why she had that written in her backpack... Anyway, these notes are probably going to help me. Maybe I can find a reason why someone did it to Charlotte." },
  ];

  const handleArrowClick = () => {
    setShowDuncanText(true); 
  };

  const handleTextComplete = () => {
    setTimeout(() => {
      setNextScene(<Floricultura />);
    }, 500);
  };

  if (nextScene) {
    return nextScene;
  }

  return (
    <div style={{ backgroundImage: `url(${CaseBackground})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>
      {!showDuncanText ? (
        <>
          /* Perdao, nao sabia oq colocar aq */
          <div style={{ padding: '30px', fontSize: "25px" }}>
            <h2>Backpack text</h2>
            <p>That’s what was written in this paper inside her backpack</p>
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
              fontSize: '40px',
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

export default EscreveuNaMochila;
