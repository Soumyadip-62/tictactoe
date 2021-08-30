import React from 'react';

const StateMessege = ({ winner, isXNext, board }) => {
  /* const Messege = winner
      ? `Winner is ${winner}`
      {!winner && noMovesleft`Match Draw`}
      : `Next player is ${isXNext ? 'X' : 'O'}`; */
  const noMovesleft = board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesleft && `Next player is ${isXNext ? 'X' : 'O'}`}
      {!winner && noMovesleft && `Match Draw`}
    </h2>
  );
};

export default StateMessege;
