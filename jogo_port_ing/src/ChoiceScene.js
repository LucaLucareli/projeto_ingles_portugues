import React, { useState } from 'react';
import DuncanImage from './assets/duncan/Duncan.png'; // Imagem do Duncan
import BackgroundImage from './assets/backgrounds/escritorio.jpeg'; // Fundo para a página
import ArrowSelection from './components/arrow-selection'; // Componente de seleção
import CharlieScene from './CharlieScene'; // Novo componente para a escolha de Charlie
import EmmaScene from './EmmaScene'; // Novo componente para a escolha de Emma

const CharacterSelectionScene = () => {
  const [choice, setChoice] = useState(null); // Estado para armazenar a escolha feita

  const handleSelection = (selection) => {
    setChoice(selection); // Atualiza o estado com a escolha feita
  };

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', height: '100vh', color: '#fff', position: 'relative' }}>
      {choice === null ? (
        <>
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

          {/* Componente ArrowSelection para escolha entre Charlie e Emma */}
          <ArrowSelection
            phrases={['Charlie', 'Emma']} // As opções de escolha
            onSelection={handleSelection}
            disableNavigation={false} // Permite navegação pelas teclas
          />
        </>
      ) : (
        // Redireciona para a cena com base na escolha feita
        <>
          {choice === 0 ? <CharlieScene /> : <EmmaScene />}
        </>
      )}
    </div>
  );
};

export default CharacterSelectionScene;
