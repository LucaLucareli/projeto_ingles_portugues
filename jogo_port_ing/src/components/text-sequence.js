import React from 'react';
import TypingText from './typing-text';

const TextSequence = ({ texts, onComplete, leftName, rightName }) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isTextCompleted, setIsTextCompleted] = React.useState(false);

  const handleComplete = () => {
    setIsTextCompleted(true);
  };

  const handleNextText = () => {
    const nextIndex = currentTextIndex + 1;
    if (nextIndex < texts.length) {
      setCurrentTextIndex(nextIndex);
      setIsTextCompleted(false);
    } else {
      onComplete();
    }
  };

  const handleInteraction = (event) => {
    if ((event.key === 'Enter' || event.type === 'click') && isTextCompleted) {
      handleNextText();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, [isTextCompleted]);

  return (
    <div style={styles.container}>
      {/* Caixa de Nomes */}
      <div style={styles.nameContainer}>
        {leftName && <div style={styles.nameBox}>{leftName}</div>}
        {rightName && <div style={styles.nameBox}>{rightName}</div>}
      </div>

      {currentTextIndex < texts.length && (
        <div style={styles.textBlock}>
          <TypingText
            text={texts[currentTextIndex]}
            onComplete={handleComplete}
          />
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
    width: '100%', // Ajusta a largura para ocupar todo o espaço
  },
  nameBox: {
    width: '200px', // Aumenta a largura da caixa de nome
    height: '50px', // Define uma altura para a caixa de nome
    borderRadius: '8px',
    background: 'var(--red, #680000)', // Cor de fundo da caixa de nome
    border: '2px solid var(--red, #680000)', // Cor da borda
    color: '#fff', // Cor do texto
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px', // Tamanho da fonte
  },
  textBlock: {
    width: '1220px',
    height: '180px', // Diminui a altura da caixa de texto
    flexShrink: 0,
    borderRadius: '16px',
    border: '6px solid var(--red, #680000)', // Cor da borda
    background: 'var(--brown-bg, rgba(21, 14, 14, 0.50))',
    padding: '15px', // Ajusta o padding
    color: '#fff',
    fontSize: '16px', // Diminui o tamanho do texto
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-4px', // Ajuste para colar a caixa de texto
  },
};

export default TextSequence;
