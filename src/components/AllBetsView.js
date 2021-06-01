import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GamesList.css';

const mapStatetoProps = (state, ownProps) =>
{
  return {
    games: state.games
  };
};

class AllBetsView extends Component {
  /*
    Napraviti za svaki game item desno link/dugme koji vodi do novog view-a (AllBetsView).
  */

  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <div className=""> All bets view </div>
    </>
  }
}

export default connect (mapStatetoProps, null)(AllBetsView);
