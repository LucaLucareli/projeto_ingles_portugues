import React, { useState } from 'react';

const Black = ({ onBack }) => {
  return (
    <div style={{ background:'#000000', backgroundSize: 'cover', height: '100vh', color: '#000000', position: 'relative' }}>
      <div style={{ padding: '30px', fontSize: "100px", color: "white", position:'absolute', bottom:'50px', display:'flex', left:'50px'}}>
        <p>To be Continued...</p> 
      </div>
    </div>
  );
};

export default Black;
