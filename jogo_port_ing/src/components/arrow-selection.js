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
              backgroundColor: selectedIndex === index ? '#e0e0e0' : '#fff',
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
            <span>{phrase}</span>
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
    width: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
  },
  arrow: {
    marginRight: '10px',
    width: '20px',
    display: 'inline-block',
  },
};

export default ArrowSelection;