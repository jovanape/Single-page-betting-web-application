import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addBet} from './../actions'
import './GamesList.css';

const mapDispatchToProps = (dispatch) => {
  return {
    addBet: (newBet) => {dispatch(addBet(newBet))}    
  };
};

const mapStatetoProps = (state, ownProps) =>
{
  return {
    betslip: state.betslip,
    games: state.games
  };
};

class GameItem extends Component {

  constructor(props) {
    super(props)
  }


  showAllBets = () => {
    
  }

  addBet = (sBet) => {
    
    for (let obj of this.props.betslip) {
      if (obj.id === this.props.gameId) {
        return
      } 
    }
    
    const newBet = {
      id: this.props.gameId,
      bet: sBet
    };
    this.props.addBet(newBet);
  }

  getClass = (elemId) => {
    for (let bet of this.props.betslip) {
      if ((bet.id === this.props.game.id) && (elemId === bet.bet)) {
        return "changeColor";
      }
    }
    return "";
  }

  /* GameItem ~ Pop komponenta */

  render () {
    return <>
      <div className="div-table-row">
        <div className="first-col">{this.props.game.home_team + "--" + this.props.game.away_team}</div>
        <div className={"div-cell" + " " + this.getClass("1")} id="1" onClick = {() => {this.addBet("1")}}> {this.props.game.bets["1"].odd} </div>
        <div className={"div-cell" + " " + this.getClass("X")} id="x" onClick = {() => {this.addBet("X")}}> {this.props.game.bets["X"].odd} </div>
        <div className={"div-cell" + " " + this.getClass("2")} id="2" onClick = {() => {this.addBet("2")}}> {this.props.game.bets["2"].odd} </div>
        <div className="description details-button" onClick = {() => {this.props.handler(this.props.gameBets)}}>all bets</div>
      </div> {/*handler={this.toggleList}*/} {/* kada se klikne treba da se otvori novi view */}
    </>;
  }
}

export default connect (mapStatetoProps, mapDispatchToProps)(GameItem);
