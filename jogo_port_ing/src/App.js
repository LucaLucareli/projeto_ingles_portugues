import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import FirstScene from './FirstScene'; // Componente da primeira cena
import CreatorsScreen from './components/CreatorScreen'; // Componente da tela de criadores

const App = () => {
  const [scene, setScene] = useState('start');

  const handleStart = () => {
    setScene('firstScene'); // Muda para a primeira cena
  };

  const handleCreators = () => {
    setScene('creators'); // Muda para a tela dos criadores
  };

  const handleBack = () => {
    setScene('start'); // Retorna à tela inicial
  };

  return (
    <div>
      {scene === 'start' && (
        <StartScreen onStart={handleStart} onCreators={handleCreators} />
      )}
      {scene === 'firstScene' && <FirstScene onBack={handleBack} />}
      {scene === 'creators' && <CreatorsScreen onBack={handleBack} />}
      
    </div>
  );
};

export default App;
