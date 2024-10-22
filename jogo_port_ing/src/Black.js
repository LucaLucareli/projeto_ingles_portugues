import React, { useState } from 'react';
import Continue from './assets/continua.jpg'
import './Black.css'

const Black = ({ onBack }) => {
  return (
    <div style={{ background:'#000000', backgroundSize: 'cover', height: '100vh', color: '#000000', position: 'relative' }}>
      <img src={Continue} />
    </div>
  );
};

export default Black;
