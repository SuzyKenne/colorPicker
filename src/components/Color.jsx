import React from 'react';

function Color({ colorHistory, handleSwatchClick }) {
  return (
    <div className="swatches-container">
      {colorHistory.map((savedColor, index) => (
        <div
          key={index}
          onClick={() => handleSwatchClick(savedColor)}
          className="swatch"
          style={{
            backgroundColor: savedColor,
          }}
        />
      ))}
    </div>
  );
}

export default Color;