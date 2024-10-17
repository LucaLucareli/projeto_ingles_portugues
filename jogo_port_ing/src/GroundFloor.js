import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/AssinaturaBill.png';
import FalandoSobreMorte from './FalandoSobreMorte'

const GroundFloor = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'There are a lot of rooms, I’m going to look at all with so much attention.' },
    { quemfala: 'Esquerda', fala: 'Why all of the spaces are empty? I almost finished, and I didn’t find any sign! No steps in the dusty, no furniture or any kind of thing that could hide something...' },
    { quemfala: 'Esquerda', fala: 'What’s happening to me? Have I missed some hint? Have I come to the wrong floriculture? Have I become bad at the only god thing that I’m left with?' },
    { quemfala: 'Esquerda', fala: 'Stop thinking about this, focus because there’s still one more room. MUST have something there.' },
    { quemfala: 'Esquerda', fala: "HERE'S A CARPET" },
    { quemfala: 'Esquerda', fala: 'Why did I scream? I can’t show that I’m here. What if the bad guy is still here?' },
    { quemfala: 'Esquerda', fala: 'NOTHING? YOU\'VE GOT TO BE KIDDING ME. Calm down, Duncan, you might have let something pass, but what? That frame... yeah, might be it, it’s big enough to hide something, how didn’t I thought about it before?' },
    { quemfala: 'Esquerda', fala: 'I knew that I would find something here. But the little door is closed, why didn’t I bring my tools?' },
    { quemfala: 'Esquerda', fala: 'What if I punch it...? Look, it worked, and the rust helped me.' },
    { quemfala: 'Esquerda', fala: 'What a dark place, I’ll to use my flashlight again... Let me see if have something in this little room...' },
    { quemfala: 'Esquerda', fala: 'Damn, it\'s her... What did they do to her? When was it? The blood is already dry...' },
    { quemfala: 'Esquerda', fala: 'I knew that I’d find her first, rather than Ford. Don’t think about it right now, Duncan, she’s dead in front of you. I’m going to call help.' },
    { quemfala: 'Esquerda', fala: 'But who has made it? Can’t be him... “Bill”, he left his signature again.' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<FalandoSobreMorte />);
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
      />
    </div>
  );
};

export default GroundFloor;