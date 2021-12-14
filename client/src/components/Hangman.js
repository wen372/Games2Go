import React, { Component } from 'react';
import './Hangman.css';


import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Hangman extends Component {
  static defaultProps = {
    images: [step0, step1, step2, step3, step4, step5, step6],
  }

  constructor(props) {
    super(props);
    this.state = {
      maxWrong: 6,
      mistake: 0,
      guessed: new Set([]),
      answer: "",
      gameStart:false,
      guessWord: "",
      guessAmount: 0,
      mistakeCount: 0,
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
    if (this.state.mistake > 5 && this.state.mistake < this.state.guessAmount){
      this.setState({mistakeCount: 5})
    }else{
      this.setState({mistakeCount: this.state.mistake })
    }
    
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: "",
      gameStart: false,
      mistakeCount:0,
    });
  }



  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
      
    }
  }

  setInput  = (e) => {
    e.preventDefault();
    if(this.state.guessWord !== "" && this.state.guessAmount > 0){
      this.setState({
        answer:this.state.guessWord,
        gameStart:true})
      }else if (this.state.guessWord !== "" && this.state.guessAmount <= 0){
        this.setState({
          guessAmount: 6,
          answer:this.state.guessWord,
          gameStart:true})
      }
    }


  render() {
    const gameOver = this.state.mistake >= this.state.guessAmount;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }
    
    if(!this.state.gameStart){
      return (
        <div className="hangman_input">
          <h1 className='text-center'>Hangman</h1>
          <form onSubmit={this.setInput}>
            <input
              type="text"
              className="hangman-form"
              name="guessWordInput"
              placeholder="word to guess"
              value={this.state.email}
              onChange={this.fieldChanged('guessWord')} />
            <input
              type="number"
              className="hangman-form"
              name="guessAmountInput"
              placeholder="amount of guesses (6 = default)"
              onChange={this.fieldChanged('guessAmount')} />
            <button className="submit">
              submit
            </button>
          </form>
        </div>
      )
    } else{

     return (
        <div className="Hangman container">
          <h1 className='text-center'>Hangman</h1>
          <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.state.guessAmount}</div>
          <div className="text-center">
            <img src={this.props.images[this.state.mistakeCount]} alt=""/>
          </div>
          <div className="text-center">
            <p>Guess the word:</p>
            <p>
              {!gameOver ? this.guessedWord() : this.state.answer}
            </p>
            <p>{gameStat}</p>
            <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
          </div>
        </div>
      )
    }

  }
}



export default Hangman;