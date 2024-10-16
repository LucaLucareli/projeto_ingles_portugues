import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/Floricultura.png'; 
import DuncanImage from './assets/duncan/Duncan.png';
import TextSequence from './components/text-sequence'; 
import ArrowSelection from './components/arrow-selection';
import EscolhaHome from './EscolhaHome'
import PredioEscolha from './PredioEscolha'

const Floricultura = () => {
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
      setCurrentScene('home');
    } else if (choiceIndex === 1) {
      // Altera o estado para navegar para EmmaScene
      setCurrentScene('building');
    }
    setChoiceMade(true);
  };

  const duncanDialogue = [
    { quemfala: 'Esquerda', fala: "Hello, Good Morning. I'm Detective Duncan, and I'm investigating a disappearance, because of it, I need to see the cameras, Can you show me?." },
    { quemfala: 'Direita', fala: 'Yes, come here!' },
    { quemfala: 'Esquerda', fala: "Nothing important here...Wait, there's something in the darkness, it's just a guy." },
    { quemfala: 'Esquerda', fala: 'Thank you for your cooperation. ' },
    { quemfala: 'Direita', fala: 'Welcome Detective' },
  ];

  // Renderização condicional com base no estado currentScene
  if (currentScene === 'building') {
    return <PredioEscolha />;
  }
  
  if (currentScene === 'home') {
    return <EscolhaHome />; // Renderiza EmmaScene
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
                rightName="Attendant"
              />
            </>
          )}

          {textCompleted && !choiceMade && (
            <>
              <ArrowSelection 
                phrases={['home', 'building']} 
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

export default Floricultura;
