import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/Ford/Fordz.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'

const NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'This sound is really weird. Otto stay here, I’ll take a look to check if everything is ok.' },
    { quemfala: 'Direita', fala: 'The sound again...' },
    { quemfala: 'Direita', fala: 'Sh*t, he has a gun, I need to stop him, I’ll jump on him, so it will be harder for him to shoot me.' },
    { quemfala: 'Esquerda', fala: 'I need to do something... I’ll take this gun.' },
    { quemfala: 'Esquerda', fala: 'YOU LET MY BROTHER GO OR I’LL SHOOT YOU.' },
    { quemfala: '???:', fala: 'Ok...' },
    { quemfala: 'Direita', fala: 'Thank you brother, it was amazing, I can deal from here.' },
    { quemfala: 'Direita', fala: 'So, who are you? And what do you want?' },
    { quemfala: '???:', fala: 'I wanted to kill you, you arrested my father...' },
    { quemfala: 'Direita', fala: 'Charles has another child? I didn’t expect that, but anyway, you will be next to your dad in jail.' }
  ])

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<Fim />);
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
        src={duncanImage} 
        alt="Duncan" 
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
        rightName="Duncan"
      />
    </div>
  );
};

export default NotEnteredTheBakeryContinuaPadariaEscolhaInvestigate;