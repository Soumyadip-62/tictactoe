import React from 'react';

const Square = ({ value, onClick, iswinSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
