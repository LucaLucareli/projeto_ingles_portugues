import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CaseBackground from './assets/backgrounds/escritorio.jpeg';
import Investigacao from './Investigacao'

const EmmaScene = ({ onBack, onNavigate }) => {
  const [textCompleted, setTextCompleted] = useState(false); // Controle para saber se o texto foi completado
  const [dialogues, setDialogues] = useState([ // Estado para armazenar os diálogos
    { quemfala: 'Esquerda', fala: 'Emma, when you were going to the Library, was she acting suspicious?' },
    { quemfala: 'Direita', fala: 'Not exactly, I noticed she was a little worried, but when I asked she said she was fine.' },
    { quemfala: 'Esquerda', fala: 'During the way to the library, did something strange happen? Anyone came to talk to you?' },
    { quemfala: 'Direita', fala: 'No, it was normal, we’re just laughing and talking.' },
    { quemfala: 'Esquerda', fala: 'Last questions, when you’re going out of the library, did she get out alone? Was she going home? And for what side did she walk, right or left?' },
    { quemfala: 'Direita', fala: 'She was alone, going home, and... I don’t remember from what side she went.' },
    { quemfala: 'Esquerda', fala: 'That’s all, thanks!' },
  ]);

  // Continuação dos diálogos com Charlie
  const newDialogues = [
    { quemfala: 'Esquerda', fala: 'Charlie, was she strange on the way to the library?' },
    { quemfala: 'Direita', fala: 'No, she was normal.' },
    { quemfala: 'Esquerda', fala: 'Before you arrived at the library, did anything strange happen?' },
    { quemfala: 'Direita', fala: 'Everything was fine.' },
    { quemfala: 'Esquerda', fala: 'Last questions, did she get out of the library alone? Did she tell where she was going? And which side did she go, right or left?' },
    { quemfala: 'Direita', fala: 'She walked out with me, but she turned right while I went straight. She was going home. I think I answered all your questions, can I go?' },
    { quemfala: 'Esquerda', fala: 'Are you stressed? Anyway, yeah you can go, thanks!' },
    { quemfala: 'Esquerda', fala: 'So where do I go now?' }
  ];

  const [nextScene, setNextScene] = useState(null); // Estado para gerenciar a transição de cena

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca o texto como completado
      setTimeout(() => {
        setDialogues(prevDialogues => [...prevDialogues, ...newDialogues]); // Altera para os novos diálogos após um pequeno delay
      }, 500); // Ajuste o tempo conforme necessário
    } else {
      setNextScene(<Investigacao />); // Atualiza o estado para renderizar a cena de Investigacao
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
        texts={dialogues}
        onComplete={handleTextComplete} // Chama handleTextComplete ao finalizar o texto
        leftName="Duncan" // Nome do personagem à esquerda
        rightName={textCompleted ? "Charlie" : "Emma"} // Nome do personagem à direita muda conforme o progresso
      />
    </div>
  );
};

export default EmmaScene;
