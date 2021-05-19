import React, { Component } from 'react';
import GamesList from "./GamesList";
import BetSlip from "./BetSlip";
import Header from "./Header";

//main app 
class App extends Component {

  render() {
    return(
      <>
        <Header/>
        <GamesList/>
        <BetSlip/>
      </>
    )
  }
}

export default App;