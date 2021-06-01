import React, { Component } from 'react';
import GamesList from "./GamesList";
import BetSlip from "./BetSlip";
import Header from "./Header";
import AllBetsView from "./AllBetsView";

//main app 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      all_bets_view: false
    };

    this.toggleTableView = this.toggleTableView.bind(this);
  }

  toggleTableView = (all_bets_view) => {
    this.setState({all_bets_view: all_bets_view})
  }

  render() {
    return(
      <>
        <Header/>
        {!this.state.all_bets_view && <>
          <GamesList app_state = {this.state.all_bets_view}/>
        </>
        }
        {this.state.all_bets_view && <>
        {/*ovde treba poslati id igre ciji se betovi traze - tj. treba poslati betove?*/}
          <AllBetsView all_bets_view={this.state.all_bets_view}/>
        </>
        }
        <BetSlip/>
      </>
    )
  }
}

export default App;