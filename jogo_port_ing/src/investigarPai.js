import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import Biblioteca from './Biblioteca';
import CharlesImage from './assets/Charles/Charles.png';

const InvestigarPai = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Esquerda', fala: "Thanks for coming in, Mr. Charles. I'm going to ask you some questions about the day your daughter disappeared." },
    { quemfala: 'Direita', fala: "Yes... i'll answer whatever you need, detective." },
    { quemfala: 'Esquerda', fala: 'Where were you on the night she disappeared? Did you have any contact with her before she left the library?' },
    { quemfala: 'Direita', fala: 'I was home, that was my day off. A few hours before she left, I called her to know when she was going to be home, and asked if she wanted me to pick her up, but she said it was fine... Oh... if I insisted a bit more...' },
    { quemfala: 'Esquerda', fala: 'Was she looking as usual on the last weeks?' },
    { quemfala: 'Direita', fala: "I'm a very busy man, I don't stay much at home, but she looked all right." },
    { quemfala: 'Esquerda', fala: "You're a very important man, do you think anyone could be angry with you and wanted to take revenge?" },
    { quemfala: 'Direita', fala: "I know that a lot of people don't like me, but I believe there isn't anyone who could do such a thing." },
    { quemfala: 'Esquerda', fala: "Alright. That's all for now, Mr. Charles. Thank you for your cooperation." },
    { quemfala: 'Esquerda', fala: "Something about him isn't right, I think I've seen this man before. Maybe I'm just being paranoid... or maybe there's more that I don't know." }
  ]);

  
  const [nextScene, setNextScene] = useState(null); // Estado para gerenciar a transição de cena

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues]); // Altera para os novos diálogos após um pequeno delay
      }, 500); // Ajuste o tempo conforme necessário
    } else {
      setTimeout(() => {
        setNextScene(<Biblioteca />);
      }, 500);
    }
  };

  // Se nextScene não é null, renderiza a cena de Investigacao
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
      boxSizing: 'border-box' 
    }}>
      <div style={{ padding: "30px", fontSize: "30px", color: "white", width: "fit-content" }}>
        <p style={{background: "black"}}>➞ Meeting with the victim's father at the police station.</p>
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
      
      {/* Texto de narração que aparece após o primeiro diálogo */}
      {textCompleted && (
        <p style={{ 
          fontStyle: 'italic', 
          color: '#000000', 
          position: 'absolute', 
          top: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 1 // Assegura que o texto fique acima da imagem
        }}>
          Charles stands up and leaves the room. Duncan remains seated, pensive.
        </p>
      )}

      <TextSequence 
        texts={dialogues}
        onComplete={handleTextComplete}
        leftName="Duncan"
        rightName={textCompleted ? "" : "Charles"} 
      />

    {!textCompleted && (
        <img 
        src={CharlesImage} 
        alt="Charles" 
        style={{ 
          position: 'absolute', 
          right: '20px',
          bottom: '0px',
          width: '313px',
          height: 'auto' 
        }} 
      />
      )}

    </div>
  );
};

export default InvestigarPai;
