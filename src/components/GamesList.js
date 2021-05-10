import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GamesList.css';
import GameItem from './GameItem';

const mapStatetoProps = (state, ownProps) =>
{
  return {
    bets: state.bets,
    my_bets: state.my_bets
  };
};

class GamesList extends Component {
  render() {
    return <div className="div-table">
       <div className="first-row">
                <div className="first-col"> Game </div>
                <div className="head-row"> 1 </div>
                <div className="head-row"> x </div>
                <div className="head-row"> 2 </div>
            </div>
      {
      this.props.bets.map((bet) => {

        //return <GameItem bet = {bet}/>
        return <GameItem key = {bet.id} bet = {bet}/>

      })
      }
    </div>;
  }
}

export default connect (mapStatetoProps, null)(GamesList);
