import React, { useState } from 'react';
import CaseBackground from './assets/backgrounds/escritorio.jpeg'; 
import DuncanImage from './assets/duncan/Duncan.png'; 
import ArrowSelection from './components/arrow-selection'; 
import InvestigarPai from './investigarPai'; // Certifique-se de que o caminho esteja correto
import Biblioteca from './Biblioteca';

const Investigacao = () => {
  const [currentScene, setCurrentScene] = useState(null); // Estado para armazenar a próxima cena

  const handleSelection = (choiceIndex) => {
    if (choiceIndex === 0) {
      setTimeout(() => {
        setCurrentScene(<InvestigarPai />); // Muda para o componente InvestigarPai após o delay
      }, 500); 
    } else if (choiceIndex === 1) {
      setTimeout(() => {
        setCurrentScene(<Biblioteca />); // Muda para a cena da Biblioteca após o delay
      }, 500);
    }
  };

  // Renderização condicional com base no estado currentScene
  if (currentScene) {
    return <div>{currentScene}</div>; // Renderiza a próxima cena após o delay
  }

  return (
    <div style={{ 
      backgroundImage: `url(${CaseBackground})`, 
      backgroundSize: 'cover', 
      height: '100vh', 
      color: '#fff', 
      position: 'relative' 
    }}>
      <>
        <p style={{ fontStyle: 'italic', color: '#fff', position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          {"Choose where to go next."}
        </p>
        <ArrowSelection 
          phrases={['Investigate the father', 'Library']} 
          onSelection={handleSelection} 
          disableNavigation={false} 
        />
      </>
    
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
    </div>
  );
};

export default Investigacao;
