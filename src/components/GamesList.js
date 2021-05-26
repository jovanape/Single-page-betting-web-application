import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GamesList.css';
import GameItem from './GameItem';

const mapStatetoProps = (state, ownProps) =>
{
  return {
    games: state.games
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
      this.props.games.map((game) => {
        return <GameItem key={game.id} gameId={game.id} game={game}/>
      })
      }
    </div>;
  }
}

export default connect (mapStatetoProps, null)(GamesList);
