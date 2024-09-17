// components/square-grid.js
import React from 'react';
import './css/square-grid.css'; 

const SquareGrid = ({ squares }) => (
    <div className="square-grid">
      {squares.map(square => (
        <div
          key={square.id}
          className="square"
          onClick={square.action} // Certifique-se de que `action` está sendo chamado
        >
          {square.label}
        </div>
      ))}
    </div>
  );
  

export default SquareGrid;
