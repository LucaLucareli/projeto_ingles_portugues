import React, { useState } from 'react';
import TextSequence from './components/text-sequence';
import DuncanImage from './assets/duncan/Duncan.png';
import CharlesImage from './assets/Charles/Charles.png';
import CaseBackground from './assets/backgrounds/delegacia.png';
import DesvendandoOQueAconteceu from './DesvendandoOQueAconteceu'

const FalandoSobreMorte = ({ onBack }) => {
  const [textCompleted, setTextCompleted] = useState(false); 
  const [dialogues, setDialogues] = useState([ 
    { quemfala: 'Direita', fala: 'Gosh, Who could be so cruel to do it to a person?' },
    { quemfala: 'Esquerda', fala: 'It was a Serial Killer called Bill, unfortunately we know just a little about him. We’re looking for him for years, but in his few and tragic appearances, he just let us with his name, “Bill” written on the floor with the blood of the victim.' },
    { quemfala: 'Direita', fala: 'It can\'t go on like this, I\'m going to avenge my baby... I\'ll be right back, I just need to make a call.' },
    { quemfala: 'Esquerda', fala: 'Ok.' },
    { quemfala: 'Esquerda', fala: 'Mr. Charles was very angry, it makes him more suspect than he was... I think listening won\'t be that bad.' },
    { quemfala: 'Direita', fala: 'Es spielt keine Rolle, dass ihn niemand kennt, sie können einen Weg finden, ihn zu töten.' },
    { quemfala: 'Esquerda', fala: '“Töten”, Does it mean “kill” in German? Why is he talking in German about it?' },
    { quemfala: 'Esquerda', fala: 'Sometimes remembering a little of German can help... Now focus Duncan, Who Mr. Charles would want to kill? I know that he is an important man, but wanting to kill someone... It is very suspicious, even if he has a Nazi face...' }
  ]);

  const [nextScene, setNextScene] = useState(null);

  const handleTextComplete = () => {
    if (!textCompleted) {
      setTextCompleted(true); // Marca os diálogos iniciais como completos
      setDialogues(prevDialogues => [...prevDialogues]); // Insere os novos diálogos
    } else {
      setTimeout(() => {
        setNextScene(<DesvendandoOQueAconteceu />);
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
            <div style={{ padding: '150px 30px 30px', fontSize: "25px", color: "white", textShadow: "1px 0 red, -1px 0 red, 0 1px red, 0 -1px red" }}>
        <p>Duncan tells Charles about his daughter's death, leaving him in shock.</p>
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

        {/* Texto de narração que aparece após o primeiro diálogo */}
        <p style={{ 
          fontStyle: 'italic', 
          color: '#fff', 
          position: 'absolute', 
          top: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1, 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo preto com transparência
          padding: '10px', // Adiciona um espaçamento interno
          border: '2px solid red', // Borda vermelha
          borderRadius: '10px', // Borda arredondada para um visual mais suave
          maxWidth: '80%', // Limita a largura do texto
          textAlign: 'center', // Centraliza o texto
          fontSize: '30px'
        }}>
          Unlocked Memory: 
          Duncan remembers when he was a little kid and his parents was teaching German to him, when Germany was fine whitout the war.
        </p>

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

export default FalandoSobreMorte;