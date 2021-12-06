import React from 'react';
import Game from '../components/Game';

function GameSelectionPage(props) {
  return (
    <div className="container">
      <Game content="Tick Tack Toe" pictureSource="/ttt.jpg" link="/TicTacToe"></Game> 
      <Game content="Tetris" pictureSource="/tetris.jpg" link="/Tetris"></Game> 
      <Game content="Hangman" pictureSource="/hangman.jpg" link="/TicTacToe"></Game>  
      <Game content="Game 4" pictureSource="/ttt.jpg" link="/TicTacToe"></Game> 
      <Game content="Game 5" pictureSource="/ttt.jpg" link="/TicTacToe"></Game> 
    </div>
  );
}

export default GameSelectionPage;