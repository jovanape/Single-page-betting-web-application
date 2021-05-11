import React, {Component} from 'react';
import { connect } from 'react-redux';
import './BetSlip.css';

const mapStatetoProps = (state, props) => {
  return {
      betSlip: state.BetSlip
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

  render () {
    return <>

      <div className = "outher">

      { !this.state.minimized && <>
        <div className="head">
          <span>Betslip</span>
          <span onClick={() => {this.minimize(true)}}>_</span>
        </div>

        {this.props.betSlip.map((aBet) => {
        return <div className="container">
          <div>
            <p className="heading-line">Chelsea</p>
            <p className = "description">Bottom line</p>
            <p className = "description">Chelsea: Real Madrid</p>
          </div>
          <div className="right-container">
            <div className="remove">x</div>
            <div className="coef-right">1.75</div>
          </div>
        </div>
         })}

        <div className="container">
          <div>
            <p className = "heading-line">draw</p>
            <p className = "description">Bottom line</p>
            <p className = "description">Arsenal: Villarreal</p>
          </div>
          <div className="right-container">
            <div className="remove">x</div>
            <div className="coef-right">2.30</div>
          </div>
        </div>
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

export default connect (null, null)(BetSlip);
