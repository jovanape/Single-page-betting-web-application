import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeBet } from '../actions';
import './BetSlip.css';

const mapStatetoProps = (state, props) => {
  return {
    betSlip: state.betslip,
    bets: state.bets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBet: (betId) => {dispatch(removeBet(betId))}
  };
};

class BetSlip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      minimized: false
    };
  }

  minimize = (isMinimized) => {
    this.setState({minimized: isMinimized})
  }

  removeBet = (betId) => {
    this.props.removeBet(betId);
  }

  //extract and return gamename (hometeam - awayteam) and coefficient from bets list
  getGameName = (betId, betType) => {
    return this.props.bets.find(x => x.id === betId).home_team + ' - ' +
           this.props.bets.find(x => x.id === betId).home_team;
  }
  
  getCoeficient = (betId, betType) => {

  }


  render () {
    return <>

      <div className="outher">

      { !this.state.minimized && <>
        <div className="head">
          <span>Betslip</span>
          <span onClick={() => {this.minimize(true)}}>_</span>
        </div>

        {this.props.betSlip.map((aBet) => (
        <div className="container" key={"betslip" + aBet.id}>
          <div>
            <p className="heading-line">Chelsea</p> {/*abet.bet 1,x,2*/}
            <p className = "description">{this.getGameName()}</p>
            <p className = "description">{aBet.home_team}</p> {/*home away team*/}
          </div>
          <div className="right-container">
            <div className="remove" onClick={() => {this.removeBet(aBet.id)}}>x</div>
            <div className="coef-right">1.75</div> {/*koef*/}
          </div>
        </div>
        ))}
        <div className="container">                
          {/*<form action="/action_page.php">*/}
          <label htmlFor="fname">bet amount:</label>
          <input type="text" id="fname" name="fname"/>
          <input type="submit" value="Submit"/>
          {/*</form>*/}
        </div>
        <div className="container">
          total winning
        </div>

        </>
        }
        { this.state.minimized && <div className="bottom">
            <span>Sports Betting</span>
            <span>Live</span>
            <span>Promos</span>
            <span>Betting slip</span>
            <span>My bets</span>
            <span onClick={() => {this.minimize(false)}}>_</span>
          </div>
        }
      </div>

    </>;

}

}

export default connect (mapStatetoProps, mapDispatchToProps)(BetSlip);
