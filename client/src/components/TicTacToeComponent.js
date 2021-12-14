import React from 'react';
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Undo(props) {
  return (
    <button className="undo" onClick={props.onClick}>
      Undo
    </button>
  );
}



class Board extends React.Component {


  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

   // if (calculateWinner(squares) || squares[i]) {
    //  return;
   // }

    if (squares[i] && !calculateTie(squares)) {
      return;
    }
    if (calculateWinner(squares) || calculateTie(squares)) {
      this.jumpTo(0)
    }else{
    
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
  } 

  handleUndoClick(i) {
    if(this.state.stepNumber > 0)
      this.jumpTo(this.state.stepNumber - 1)

  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const tied = calculateTie(current.squares);
    let status;
    if (winner) {
      status = `🎉 Player ${winner} WON!! 🎉`;
    } else if(tied){
      status = 'Tied'
    }else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      
      <div className="ticTacToeGame ">
        <div className="ticTacToeGame-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
        
        <div className="ticTacToeGame-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="undo-button">
          <Undo 
            onClick={(i) => this.handleUndoClick(i)}
          />  
        </div>
        
      </div>
    );
  }
}

export default Game;
// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculateTie(squares) {
  let count = 0;
  for(let i=0; i<squares.length; i++){
    if(squares[i] != null){
      count+=1
    }
  }

  if(count === 9)
    return true;
  else
   return false;
}