import React, { Component } from 'react';
import GamesList from "./GamesList";
import BetSlip from "./BetSlip";

//main app 
class App extends Component {

  render() {
    console.log(this.props.my_bets);
    return(
      <>
        <GamesList/>
        <BetSlip/>
      </>
    )
  }
}

export default App;