import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import DesvendandoOQueAconteceuFalandoComOCharles from './DesvendandoOQueAconteceuFalandoComOCharles'

const DesvendandoOQueAconteceu = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'Charles makes me feel strange, I think it will not hurt if I investigate him a little...' },
    { quemfala: 'Esquerda', fala: 'I’ll take his technical sheet to home with me, so I can investigate it better with no one looking.' },
    { quemfala: 'Esquerda', fala: 'So, what do we have here? Charles, isn\'t that his real name? Why did they pretend that they do not know anything about this guy? Just because he’s rich?' },
    { quemfala: 'Esquerda', fala: 'He’s German, that’s why he was speaking in German earlier, which makes a lot of sense. He helped German Soldiers, it explains why I recognized him.' },
    { quemfala: 'Esquerda', fala: 'Maybe I’m crazy, but I believe that there exists a photo of Cedric and him...' },
    { quemfala: 'Esquerda', fala: 'I found it. Look, both of these horrible men together... This man will not be free for so much time.' },
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<DesvendandoOQueAconteceuFalandoComOCharles />);
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

      {/* Diálogo inicial seguido pelos novos diálogos */}
      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName="Charles"
      />
    </div>
  );
};

export default DesvendandoOQueAconteceu;