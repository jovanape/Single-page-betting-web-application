import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeAll, removeBet } from '../actions';
import {submitBetSlip} from './../actions'
import './BetSlip.css';
import BetSlipInfo from './BetslipInfo';

const mapStatetoProps = (state, props) => {
  return {
    betSlip: state.betslip,
    games: state.games
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBet: (betId) => {dispatch(removeBet(betId))},
    submitBetSlip: (amount, total_coefficient) => {dispatch(submitBetSlip(amount, total_coefficient))},
    removeAll: () => {dispatch(removeAll())}    
  };
};

class BetSlip extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      minimized: false,
      amount: 0,
      totalCoeficient: 1
    };
  }

  minimize = (isMinimized) => {
    this.setState({minimized: isMinimized})
  }

  // state -> this.state.
  // props -> this.props.

  saveAmount = () => {
    this.setState({amount: this.myRef.current.value});
  }

  // naredna funkcija poziva se automatski
  // treba samo da se implementira u komponenti
  // componentDidUpdate(prevProps, prevState, snapshot);
  // prevProps = prethodne vrednosti this.props-a
  // prevState = prethodna vrednost statea

  // this.props i this.state su novi trenutni
  // svaki put kada se promeni state ili property pozvace se ova f-ja
  // nama treba samo kada se promenio betslip, tj. duzina liste betslip koja sadrzi objekte
  // prevProps = prethodne vrednosti this.props-a

  componentDidUpdate(prevProps) {
    if (prevProps.betSlip.length !== this.props.betSlip.length) {
      this.calculateTotalCoeficient();
    }
  }

  submitBetSlipClick = () => {
    this.props.submitBetSlip(this.state.amount, this.state.total_coefficient);
  }

  removeAllClick = () => {
    this.props.removeAll();
  }

  calculateTotalCoeficient = () => {
    let totalCoeficient = 1;
    for (let bet of this.props.betSlip) {
      for (let game of this.props.games) {
        if (bet.id === game.id) {
          // game["bets"][bet.bet] = {odd: 1, type: 1}
          totalCoeficient *= game.bets[bet.bet].odd;
          break;
        }
      }
    }
    this.setState({total_coefficient: totalCoeficient});
  }
  
  render () {
    return <>
      <div className="outher">
        { !this.state.minimized && <>
          <div className="head">
            <span>Betslip</span>
            <span onClick={() => {this.minimize(true)}}>_</span>
          </div>
          {this.props.betSlip.map((aBet) => (
            <BetSlipInfo aBet={aBet} />
          ))}
          <div className="container">
            <input type="submit" value="Remove all" onClick={this.removeAllClick}/>
          </div>
          <div className="container">                
            <label htmlFor="bet_amount">bet amount:</label>
            <input type="text" name="bet_amount" id="bet_amount" ref={this.myRef} onChange={this.saveAmount} />
            <input type="submit" value="Submit" onClick={this.submitBetSlipClick}/>
          </div>
          <div className="container">
            <span>total coeff: </span><span>{this.state.totalCoeficient}</span>
          </div>
          <div className="container">
            <span id="possible_win_result">total winning: </span><span>{this.state.amount*this.state.totalCoeficient}</span>
          </div>
        </>
        }

        { this.state.minimized && <div className="bottom">
            <span>Sports Betting</span>
            <span>Live</span>
            <span>Promos</span>
            <span>Betting slip</span>
            <span>My bets</span>
            <span onClick={() => {this.minimize(false)}}>_</span>
          </div>
        }
      </div>
    </>;
  }
}

export default connect (mapStatetoProps, mapDispatchToProps)(BetSlip);
