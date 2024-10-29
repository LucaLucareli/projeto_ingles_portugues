import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
// import andarVazio from './assets/backgrounds/andarVazio.png'; // Sala vazia
// import AndarTapete from './assets/backgrounds/andar.png'; // Sala com tapete
//import portaAberta from './assets/backgrounds/portaAberta.png'; // Porta aberta
import DescobertaDoCorpo from './assets/backgrounds/AssinaturaBill.png'; // Descoberta do corpo
import FalandoSobreMorte from './FalandoSobreMorte';


const GroundFloor3 = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: 'What a dark place, I’ll to use my flashlight again... Let me see if have something in this little room...' },
    { quemfala: 'Esquerda', fala: 'Damn, it\'s her... What have they done to her? When was it? The blood is already dry...' },
    { quemfala: 'Esquerda', fala: 'I knew that I’d find her before Ford. Don’t think about it right now, Duncan, she’s dead in front of you. I’m going to call help.' },
    { quemfala: 'Esquerda', fala: 'But who has done that? Again... “Bill”, he left his signature next to the body.' }
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
      backgroundImage: `url(${DescobertaDoCorpo})`, 
      backgroundSize: 'cover', 
      height: '100vh', 
      color: '#fff', 
      position: 'relative', 
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '10px', fontSize: "20px", color: "white", width: "fit-content" }}>
    <p style={{background: "black"}}>➞ 
      Duncan scans the empty rooms, frustrated at finding nothing useful and wondering if he took the wrong path.
    </p>
    <p style={{background: "black"}}>➞ 
      In the last room, you only find a rug, but nothing underneath it. Discouraged, he remembers a large painting in the first room.
    </p>
    <p style={{background: "black"}}>➞ 
      When he removes it, he discovers a small locked iron door. Angry, he punches the rusty door, which opens. 
    </p>
    <p style={{background: "black"}}>➞ 
      Inside, he finds a dark and cramped room, where he sees Charlotte, dead and covered in blood.
    </p>
    <p style={{background: "black"}}>➞ 
      Shocked, he briefly thinks about his rivalry with Ford, but forces himself to focus and decides to call for reinforcements.
    </p>
      </div>
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

export default GroundFloor3;