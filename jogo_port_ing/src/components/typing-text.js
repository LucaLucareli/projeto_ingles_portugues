import React, { useState, useEffect } from 'react';

const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // Controle se a frase terminou de ser exibida

  useEffect(() => {
    if (isCompleted || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      setCurrentIndex((prevIndex) => prevIndex + 1);

      if (currentIndex + 1 === text.length) {
        setIsCompleted(true);
        onComplete(); // Notifica que o texto terminou de ser exibido
      }
    }, 50); // Atraso de 50ms entre cada letra

    return () => clearTimeout(timeout);
  }, [currentIndex, text, isCompleted, onComplete]);

  const skipTyping = () => {
    setDisplayedText(text);
    setIsCompleted(true);
    onComplete(); // Completa a exibição e notifica o pai
  };

  return (
    <div style={styles.textContainer}>
      <p>{displayedText}</p>
    </div>
  );
};

const styles = {
  textContainer: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    textAlign: 'center',
  },
};

export default TypingText;
