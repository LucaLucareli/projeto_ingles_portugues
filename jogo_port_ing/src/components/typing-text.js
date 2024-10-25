import React, { useState, useEffect } from 'react';

const TypingText = ({ text = '', onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false); // Controle se a frase terminou de ser exibida

  useEffect(() => {
    // Reseta o estado quando o texto muda
    setDisplayedText('');
    setCurrentIndex(0);
    setIsCompleted(false);
  }, [text]);

  useEffect(() => {
    // Verifica se o texto é uma string válida
    if (!text || isCompleted || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      setCurrentIndex((prevIndex) => prevIndex + 1);

      if (currentIndex + 1 === text.length) {
        setIsCompleted(true);
        if (onComplete) onComplete(); // Notifica que o texto terminou de ser exibido
      }
    }, 85); // Atraso de 50ms entre cada letra

    return () => clearTimeout(timeout);
  }, [currentIndex, text, isCompleted]);

  const skipTyping = () => {
    setDisplayedText(text);
    setIsCompleted(true);
    if (onComplete) onComplete(); // Completa a exibição e notifica o pai
  };

  return (
    <div style={styles.textContainer} onClick={skipTyping}>
      <p style={styles.text}>{displayedText}</p>
    </div>
  );
};

const styles = {
  textContainer: {
    padding: '20px',
    borderRadius: '16px',
    maxWidth: '1200px',
    minHeight: '220px', // Mantém uma altura mínima
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Texto branco
    margin: '20px auto', // Centraliza horizontalmente
  },
  text: {
    fontSize: '33px', // Fonte maior para melhor leitura
    lineHeight: '1.6',
    color: '#fff', // Mantém o texto branco
    fontFamily: 'Arial, sans-serif', // Fonte limpa e fácil de ler
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Sombra no texto para melhorar legibilidade
    letterSpacing: '1px', // Espaçamento para dar mais clareza
    wordWrap: 'break-word', // Faz o texto quebrar a linha se ultrapassar o limite do contêiner
    whiteSpace: 'normal', // Garante que o texto vai quebrar em várias linhas se necessário
    overflowWrap: 'break-word', // Outra forma de garantir que o texto se ajuste ao contêiner
  },
};

export default TypingText;
