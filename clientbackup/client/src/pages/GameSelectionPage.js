import React from 'react';
import Post from '../components/Post';

function GameSelectionPage(props) {
  return (
    <div className="container">
      <Post content="Tick Tack Toe" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 2" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 3" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 4" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
      <Post content="Game 5" pictureSource="/ttt.jpg" link="/TicTacToe"></Post> 
    </div>
  );
}

export default GameSelectionPage;