import React, { useState, useEffect } from 'react';
import TypingText from './typing-text';
import { FaArrowRight } from 'react-icons/fa'; // Ícone de seta do react-icons

const TextSequence = ({ texts, onComplete, leftName, rightName }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextCompleted, setIsTextCompleted] = useState(false);

  const handleComplete = () => {
    setIsTextCompleted(true);
  };

  const handleNextText = () => {
    //const nextIndex = currentTextIndex + 1;
    const nextIndex = currentTextIndex + 1;
    if (nextIndex < texts.length) {
      setCurrentTextIndex(nextIndex);
      setIsTextCompleted(false); // Reinicia o estado de conclusão do texto
    } else {
      // Se não houver mais textos, chama onComplete
      onComplete();
    }
  };

  const handleInteraction = (event) => {
    if (event.key === 'Enter' && isTextCompleted) {
      handleNextText();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleInteraction);
    return () => {
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [isTextCompleted]);

  const speakingCharacter = texts[currentTextIndex].quemfala;

  // Definindo cores para o nome que não está falando
  const getNameBoxStyle = (isSpeaking) => ({
    ...styles.nameBox,
    background: isSpeaking ? 'var(--red, #680000)' : 'rgba(255, 99, 71, 0.6)', // Vermelho claro com opacidade
  });

  return (
    <div style={styles.container}>
      <div style={styles.nameContainer}>
        {/* Renderiza a caixa da esquerda somente se leftName estiver presente */}
        {leftName && (
          <div style={getNameBoxStyle(speakingCharacter === 'Esquerda')}>
            {leftName}
          </div>
        )}

        {/* Renderiza a caixa da direita somente se rightName estiver presente */}
        {rightName && (
          <div style={getNameBoxStyle(speakingCharacter === 'Direita')}>
            {rightName}
          </div>
        )}
      </div>

      {currentTextIndex < texts.length && (
        <div style={styles.textBlock}>
          <div style={{ ...styles.text, opacity: speakingCharacter === 'Esquerda' ? 0.6 : 1 }}>
            <TypingText
              text={texts[currentTextIndex].fala}
              onComplete={handleComplete}
            />
          </div>
        </div>
      )}

      {isTextCompleted && currentTextIndex < texts.length - 1 && (
        <div style={styles.arrowContainer} onClick={handleNextText}>
          <FaArrowRight style={styles.arrow} />
        </div>
      )}

      {isTextCompleted && currentTextIndex === texts.length - 1 && (
        <div style={styles.arrowContainer} onClick={onComplete}>
          <FaArrowRight style={styles.arrow} />
        </div>
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
    width: '1220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameBox: {
    width: '200px',
    height: '50px',
    borderRadius: '8px',
    border: '2px solid var(--red, #680000)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  textBlock: {
    width: '1220px',
    height: '180px',
    flexShrink: 0,
    borderRadius: '16px',
    border: '6px solid var(--red, #680000)',
    background: 'rgba(21, 14, 14, 0.80)', // Fundo do bloco de texto
    padding: '15px',
    color: '#fff',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-4px',
  },
  text: {
    color: '#fff', // Cor do texto
    fontSize: '16px',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  arrow: {
    fontSize: '24px',
    color: '#fff', // Cor branca
    transition: 'color 0.3s ease',
  },
};

export default TextSequence;
