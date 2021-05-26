import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class BetSlipInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  removeBet = (betId) => {
    this.props.removeBet(betId);
  }

  // extract and return gamename (hometeam - awayteam) and coefficient from bets list
  getGameName = (betId, betType) => {
    let currentGame = this.props.games.find(x => x.id === betId);
    console.log(currentGame.home_team);
    return currentGame.home_team + ' - ' + currentGame.away_team;
  }

  // Unhandled Rejection (TypeError): currentGame.bets.find is not a function
  getCoeficient = (betId, betType) => {
    let currentGame = this.props.games.find(x => x.id === betId);
    return currentGame.bets[betType]["odd"];
  }

  render() {
    return ( <>

    <div className="container" key={"betslip" + this.props.aBet.id}>
    <div>
      <p className="heading-line">{this.props.aBet.bet}</p> {/*abet.bet 1,x,2*/}
      <p className="description">{this.getGameName(this.props.aBet.id, this.props.aBet.bet)}</p>
      <p className="description">{this.props.aBet.home_team}</p> {/*home away team*/}
     {/* <p className = "description">{this.calculateTotalCoeficient(aBet.id, aBet.bet)}</p> */}
    </div>
    <div className="right-container">
      <div className="remove" onClick={() => {this.removeBet(this.props.aBet.id)}}>x</div>
      <div className="coef-right">{this.getCoeficient(this.props.aBet.id, this.props.aBet.bet)}</div> {/*koef*/}
    </div>
  </div>
</>)};
}

export default connect (null, null)(BetSlipInfo);
