import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeBet } from '../actions';
import {submitBetSlip} from './../actions'

import './BetSlip.css';

const mapStatetoProps = (state, props) => {
  return {
    betSlip: state.betslip,
    games: state.games
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBet: (betId) => {dispatch(removeBet(betId))},
    submitBetSlip: (amount, total_coefficient) => {dispatch(submitBetSlip(amount, total_coefficient))}    
  };
};


class BetSlip extends Component {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      minimized: false,
      totalpossiblewin: 0,
      totalCoeficient: 1
    };

  }

  minimize = (isMinimized) => {
    this.setState({minimized: isMinimized})
  }

  removeBet = (betId) => {
    this.props.removeBet(betId);
  }

  //extract and return gamename (hometeam - awayteam) and coefficient from bets list
  getGameName = (betId, betType) => {
    let currentGame = this.props.games.find(x => x.id === betId);
    return currentGame.home_team + ' - ' + currentGame.away_team;
  }
  // Unhandled Rejection (TypeError): currentGame.bets.find is not a function
  getCoeficient = (betId, betType) => {
    let currentGame = this.props.games.find(x => x.id === betId);
    return currentGame.bets[betType]["odd"];
  }

  /*
  `  imas listu sta je u betslipu, koja utakmica i koji bet si odigrao,
    i imas listu detalja svih utakmica u ponudi..
    kako da za svaku stavku u listi betslip izvuces to sto ti treba
    iz liste detalja svih utakmica`
  */
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
    this.setState({totalCoeficient: totalCoeficient});
  }

  calculateTotalPossibleWin = () => {
    //let amount = document.getElementById("bet_amount").value; // link procitati
    let amount = this.myRef.current.value;
    // bet_amount multiplied by total coefficient
    // document.getElementById("possible_win_result").innerHTML = amount * this.calculateTotalCoeficient();
    const possibleWin =  amount * this.state.totalCoeficient;
    this.setState({totalpossiblewin: possibleWin});
  }

  // poziva se automatski
  // treba samo da se implementira u komponenti
  // componentDidUpdate(prevProps, prevState, snapshot);
  // prevProps = prethodne vrednosti this.props-a
  // prevState = prethodna vrednost statea

  // this.props i this.state su novi trenutni
  // svaki put kada se promeni state ili property pozvace se ova fja
  // nama treba samo kada se promenio betslip, tj. duzina liste betslip koja sadrzi objekte
  componentDidUpdate(prevProps) { // prevProps = prethodne vrednosti this.props-a
    // poziva se automatski
    // treba samo da se implementira u komponenti

    if (prevProps.betSlip.length !== this.props.betSlip.length) {
      this.calculateTotalCoeficient();
    }

  }

  submitBetSlip = (amount, total_coefficient) => {
    this.props.submitBetSlip(amount, total_coefficient);
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
        <div className="container" key={"betslip" + aBet.id}>
          <div>
            <p className="heading-line">{aBet.bet}</p> {/*abet.bet 1,x,2*/}
            <p className="description">{this.getGameName(aBet.id, aBet.bet)}</p>
            <p className="description">{aBet.home_team}</p> {/*home away team*/}
           {/* <p className = "description">{this.calculateTotalCoeficient(aBet.id, aBet.bet)}</p> */}
          </div>
          <div className="right-container">
            <div className="remove" onClick={() => {this.removeBet(aBet.id)}}>x</div>
            <div className="coef-right">{this.getCoeficient(aBet.id, aBet.bet)}</div> {/*koef*/}
          </div>
        </div>
        ))}
        <div className="container">                
          {/*<form action="/action_page.php">*/}
          <label htmlFor="bet_amount">bet amount:</label>
          <input type="text" name="bet_amount" id="bet_amount" ref={this.myRef} onChange={this.calculateTotalPossibleWin} />
          <input type="submit" value="Submit" onClick={() => {this.submitBetSlip()}}/> {/**/}
          {/*</form>*/}
        </div>
        <div id="possible_win_result"> {this.state.totalpossiblewin} </div>
        <div className="container">
          <span>total coeff:</span><span>{this.state.totalCoeficient}</span>
        </div> {/*this.calculateTotalCoeficient() mora da postoji return u toj funkciji*/}
        <div className="container"> {/*setuje se state ali mora on da se isprinta*/}
          total winning
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
