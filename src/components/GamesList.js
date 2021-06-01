import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GamesList.css';
import GameItem from './GameItem';
import AllBetsView from './AllBetsView'

const mapStatetoProps = (state, ownProps) =>
{
  return {
    games: state.games,
    leagues: state.leagues
  };
};


class GamesList extends Component {
/*
  Napraviti za svaki list item desno link koji vodi do novog view-a
*/

  constructor(props) {
    super(props);
    this.state = {
      selected_league: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selected_league: parseInt(e.target.value) });
  }
  
  render() {
    const selectedLeague = this.state.selected_league;
    let gamesList;
    if (selectedLeague === 0) {
      gamesList = this.props.games.map((game) => { /* prosledjivanje svih betova komponenti GameItem */
        return <GameItem key={game.id} gameId={game.id} game={game} gameBets={game.bets}/>
      });
    } else {
      gamesList = this.props.games.filter(current_game => current_game.league === selectedLeague).map((game) => {
        return <GameItem key={game.id} gameId={game.id} game={game}/>
      });
    }

    return <>
      
        <div className="drop-menu">
          <label htmlFor="filter">Filter matches:</label>
          <select name="leaguefilter" id="filter" onChange={this.handleChange}>
            <option value="0">All</option>
            {
            Object.entries(this.props.leagues).map(curr_league => 
            <option key={curr_league[1].id} value={curr_league[1].id}>{curr_league[1].text}</option>
            )
            }
        </select>

        </div>
        
        <div className="div-table">
          <div className="first-row">
            <div className="first-col"> Game </div>
            <div className="head-row"> 1 </div>
            <div className="head-row"> x </div>
            <div className="head-row"> 2 </div>
          </div>
          { gamesList }
        </div>

        </>

  }
}

export default connect (mapStatetoProps, null)(GamesList);
