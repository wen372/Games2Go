import React from 'react';
import Game from '../components/Game';

function GameSelectionPage(props) {
  return (
    <div className="container">
      <Game content="Tick Tack Toe" pictureSource="/ttt.jpg" link="/TicTacToe"></Game> 
      <Game content="Tetris" pictureSource="/tetris.jpg" link="/Tetris"></Game> 
      <Game content="Hangman" pictureSource="/hangman.jpg" link="/Hangman"></Game> 
      <Game content="Checkers" pictureSource="/checkers.jpg" link="/Checkers"></Game> 
      <Game content="2048" pictureSource="/2048.gif" link="/2048"></Game> 

    </div>
  );
}

export default GameSelectionPage;