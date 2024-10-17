import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import OttoImage from './assets/Otto/Otto.png';
import duncanImage from './assets/Ford/Fordz.png'
import CaseBackground from './assets/backgrounds/Lugar.png';
import Fim from './Fim'

const Investigate = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'This sound is really weird. Otto stay here, I’ll take a look to check if everything is ok.' },
    { quemfala: 'Direita', fala: 'The sound again...' },
    { quemfala: 'Direita', fala: 'Sh*t, he has a gun, I need to stop him, I’ll jump on him, so it will be harder for him to shoot me.' },
    { quemfala: 'Esquerda', fala: 'I need to do something... I’ll take this gun.' },
    { quemfala: 'Esquerda', fala: 'YOU LET MY BROTHER GO OR I’LL SHOOT YOU!' },
    { quemfala: '???:', fala: 'Ok...' },
    { quemfala: 'Direita', fala: 'Thank you brother, it was amazing, I can deal from here.' },
    { quemfala: 'Esquerda', fala: 'You’ll do nothing, what’s your name guy?' },
    { quemfala: '???:', fala: 'James.' },
    { quemfala: 'Esquerda', fala: 'Ok, James, I’ll give you your gun back and pretend that I didn’t see you, if you pretend that didn’t see me too. Just let me go and you can do whatever you want with my brother.' },
    { quemfala: '???:', fala: 'Ok.' },
    { quemfala: 'Direita', fala: 'Otto, what are you doing?' },
    { quemfala: 'Esquerda', fala: 'I’m doing justice for our parents that you killed, you’re a monster and deserve all the worst. Bye, and I hope to never see you again.' }
  ]);

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

export default Investigate;