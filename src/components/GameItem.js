import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addBet} from './../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addBet: (newBet) => {dispatch(addBet(newBet))}
  };
};

class GameItem extends Component {

  constructor(props) {
    super(props)
  }

  addBet = (sBet) => {
    const newBet = {
      id: this.props.gameId,
      bet: sBet
    };
    this.props.addBet(newBet);
  }

  render () {
    return <>
      <div className="div-table-row">
        <div className="first-col">{this.props.bet.home_team + "--" + this.props.bet.away_team}</div>
        <div className="div-cell" onClick = {() => {this.addBet("1")}}>  {this.props.bet.bets["1"].odd} </div>
        {/*<div className="div-cell" onClick = {this.props.addbet}> 2.15 </div>*/}
        <div className="div-cell" onClick = {() => {this.addBet("X")}}> {this.props.bet.bets["X"].odd} </div>
        <div className="div-cell" onClick = {() => {this.addBet("2")}}>  {this.props.bet.bets["2"].odd} </div>


      </div>
      </>;

  }

}

export default connect (null, mapDispatchToProps)(GameItem);
