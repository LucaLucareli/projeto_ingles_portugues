import React, { useState, useEffect } from 'react';
import setaDireita from '../assets/seta-direita.png'; // Caminho atualizado para a imagem

const ArrowSelection = ({ phrases, onSelection, disableNavigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (disableNavigation) return;

      if (event.key === 'ArrowUp') {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (event.key === 'ArrowDown') {
        setSelectedIndex((prevIndex) => (prevIndex < phrases.length - 1 ? prevIndex + 1 : prevIndex));
      } else if (event.key === 'Enter') {
        const value = getSelectionValue();
        onSelection(value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [phrases.length, selectedIndex, onSelection, disableNavigation]);

  const getSelectionValue = () => {
    return selectedIndex;
  };

  const handleClick = (index) => {
    if (disableNavigation) return;
    setSelectedIndex(index);
    const value = getSelectionValue();
    onSelection(value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        {phrases.map((phrase, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              ...styles.item,
              backgroundColor: selectedIndex === index ? 'rgba(104, 0, 0, 0.4)' : 'transparent',
              color: '#fff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(104, 0, 0, 0.4)'; // Fundo vermelho com 40% de opacidade ao passar o mouse
            }}
            onMouseLeave={(e) => {
              if (selectedIndex !== index) {
                e.currentTarget.style.backgroundColor = 'transparent'; // Volta ao transparente quando o mouse sai
              }
            }}
          >
            <span style={styles.arrow}>
              {selectedIndex === index && (
                <img
                  src={setaDireita}
                  alt="Seta"
                  width="16"
                  height="16"
                />
              )}
            </span>
            <span style={{ fontSize: "33px" }}>{phrase}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1092px', // Aumentado em mais 40% (780px * 1.4)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: '1110px', // Aumentado em mais 40% (806px * 1.4)
    height: '150px',
    flexShrink: 0,
    borderRadius: '16px',
    border: '6px solid var(--red, #680000)',
    background: 'var(--brown-bg, rgba(21, 14, 14, 0.50))',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Para garantir que o fundo não ultrapasse o contêiner
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    width: '100%', // Os itens ocupam a largura total do contêiner
    boxSizing: 'border-box', // Certifica-se de que o padding seja incluído no tamanho total
  },
  arrow: {
    marginRight: '10px',
    width: '20px',
    display: 'inline-block',
  },
};

export default ArrowSelection;
