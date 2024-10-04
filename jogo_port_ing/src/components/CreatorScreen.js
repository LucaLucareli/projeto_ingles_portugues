import React from 'react';
import './css/StartScreen.css';

const CreatorsScreen = ({ onBack }) => {
  return (
    <div className="start-screen" style={{ backgroundImage: `url(${require('../assets/backgrounds/startScreenBackground.png')})` }}>
      <h1 className="title">Creators</h1>
      <div className="button-container">
        <button className="start-button" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CreatorsScreen;
