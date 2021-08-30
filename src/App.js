import React, { useState } from 'react';
import Board from './components/Board';
import StateMessege from './components/StateMessege';
import './styles/root.scss';
import { calculateWinner } from './helpers';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const { winner, winSquare } = calculateWinner(board);

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setIsXNext(prev => !prev);
  };
  const onNewGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StateMessege winner={winner} isXNext={isXNext} board={board} />
      <Board
        board={board}
        handleSquareClick={handleSquareClick}
        winSquare={winSquare}
      />
      <button type="button" onClick={onNewGame}>
        Start new Game
      </button>
    </div>
  );
};
export default App;
