import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import CaseBackground from './assets/backgrounds/Lugar.png';
import DuncanImage from './assets/Ford/Fordz.png'
import SusanImage from './assets/Susan/Susan.png'
import NotEnteredTheBakeryContinuaPadariaEscolha from './NotEnteredTheBakeryContinuaPadariaEscolha';

const NotEnteredTheBakeryContinuaPadaria = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Baby, I don’t know what happened in my house.. I need you!' },
    { quemfala: 'Direita', fala: 'Ok, calm down, you can stay at my place for the time you need.' },
  ]);

  const newDialogues = [
    { quemfala: 'Direita', fala: 'I’m a monster... I did all of that bad things... I’m the Serial Killer.' },
    { quemfala: 'Esquerda', fala: 'Yeah, I don’t know what happen, but you kind looked like another person...' },
    { quemfala: 'Direita', fala: 'Ok, maybe it will help a bit. Wait, you said that I told you my name was Ford?' },
    { quemfala: 'Esquerda', fala: 'That’s why you’re take a break.' },
    { quemfala: 'Direita', fala: 'I’m also him... I don’t know my self anymore.' }
  ];
  

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Altera para os novos diálogos após um pequeno delay
      }, 500); // Ajuste o tempo conforme necessário
    } else {
      setTimeout(() => {
        setNextScene(<NotEnteredTheBakeryContinuaPadariaEscolha />);
      }, 500);
    }
  };

  if (nextScene) {
    return nextScene;
  }

  return (
    <div style={{ 
      backgroundImage: `url(${CaseBackground})`, 
      backgroundSize: 'cover', 
      height: '100vh', 
      color: '#fff', 
      position: 'relative', 
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
                          <div style={{ padding: "30px", fontSize: "30px", color: "white", width: "fit-content" }}>
                <p style={{background: "black"}}>➞ They returned to the present.
                </p>
                <br/>
                <p style={{background: "black"}}>➞ 
                (The player now controls Duncan and can choose his actions.)
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
        src={textCompleted ? DuncanImage : SusanImage} 
        alt="Bill" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '300px',
          height: 'auto' 
        }} 
      />

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Otto"
        rightName= {textCompleted ? "Duncan" : "Susan"}
      />
    </div>
  );
};

export default NotEnteredTheBakeryContinuaPadaria;