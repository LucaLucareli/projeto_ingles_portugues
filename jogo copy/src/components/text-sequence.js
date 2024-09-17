import React, { useState, useEffect } from 'react';
import TypingText from './typing-text';

const TextSequence = ({ texts, onComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextCompleted, setIsTextCompleted] = useState(false); // Indica se o texto atual terminou de ser exibido

  const handleComplete = () => {
    // Texto atual foi completamente exibido
    setIsTextCompleted(true);
  };

  const handleNextText = () => {
    const nextIndex = currentTextIndex + 1;
    if (nextIndex < texts.length) {
      setCurrentTextIndex(nextIndex);
      setIsTextCompleted(false); // Reseta para o próximo texto
    } else {
      onComplete(); // Fim da sequência
    }
  };

  const handleInteraction = (event) => {
    if ((event.key === 'Enter' || event.type === 'click') && isTextCompleted) {
      handleNextText(); // Apenas pula se o texto já tiver sido completamente exibido
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, [isTextCompleted]);

  return (
    <div style={styles.container}>
      {currentTextIndex < texts.length && (
        <TypingText
          text={texts[currentTextIndex]}
          onComplete={handleComplete} // Chamado quando o texto terminar de ser exibido
        />
      )}
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
};

export default TextSequence;
