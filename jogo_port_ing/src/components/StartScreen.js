import React from 'react';
import './css/StartScreen.css'; 

const StartScreen = ({ onStart, onStart2, onCreators }) => {
  return (
    <div className="start-screen" style={{ backgroundImage: `url(${require('../assets/backgrounds/startScreenBackground.png')})` }}>
      <h1 className="title">Deadly Irony</h1> 
      <div className="button-container">
        <button className="start-button" onClick={onStart}>
          Start - Part 1
        </button>
        <button className="start-button" onClick={onStart2}>
          Start - Part 2
        </button>
        <button className="creator-button" onClick={onCreators}>
          Creators
        </button>
        <button className="exit-button">
          Exit
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
