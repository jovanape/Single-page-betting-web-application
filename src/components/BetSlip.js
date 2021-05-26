import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeAll, removeBet } from '../actions';
import {submitBetSlip} from './../actions'
import './BetSlip.css';
import BetSlipInfo from './BetslipInfo';

const mapStatetoProps = (state, props) => {
  return {
    betSlip: state.betslip,
    games: state.games
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBet: (betId) => {dispatch(removeBet(betId))},
    submitBetSlip: (amount, total_coefficient) => {dispatch(submitBetSlip(amount, total_coefficient))},
    removeAll: () => {dispatch(removeAll())}    
  };
};


class BetSlip extends Component {

  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      minimized: false,
      amount: 0,
      totalCoeficient: 1
    };

  }

  minimize = (isMinimized) => {
    this.setState({minimized: isMinimized})
  }

  /*
    imamo listu sta je u betslipu, koja utakmica i koji bet je odigran,
    i imamo listu detalja svih utakmica u ponudi
    kako da za svaku stavku u listi betslip izvucemo to sto treba
    iz liste detalja svih utakmica
  */


    /*
      1. formatirati sve
        - redosled
        - bet amount: vrednost
        - isOpen u toggle
      
      2. pop up + close up button - position: absolute

      3. betslips dugme - sa desne strne svaki treba da ima details
      (lista svih igara jednog submitted betslipa)

      nestaje sve iz popupa, detaljno se prikazuje samo za jedan betslip
      i ima back button za povratak na listu

      lokalni state - da li je otvorena lista ili nije

      mogu da budu dve komponente: list item i detail (ali ne mora)

      moramo da znamo na koji od betslipova smo kliknuli
      1. u submitted_betslips dodati properti id (generissati ga)
      2. proslediti submitted_betslip trenutni - ceo taj objekat prosledimo f-ji
          - ceo submitted_betslip sacuvati u lokalni state (ako ga ima ili ako ga nema)
          - kada je detail view ukljucen u tom trenutku citamo
          iz submitted_betslip kojeg smo zapamtili u lok state

          current_betslip_details
          kad se klikne na details current_betslip_details postaviti na vrednosti betslipa
          kad se klikne na back current_betslip_details postaviti na null

          this.state.current_betslip_details && detaljni prikaz
          ako nije onda list prikaz

      state -> this.state.
      props -> this.props.
    */


  saveAmount = () => {
    this.setState({amount: this.myRef.current.value});
  }

  // poziva se automatski
  // treba samo da se implementira u komponenti
  // componentDidUpdate(prevProps, prevState, snapshot);
  // prevProps = prethodne vrednosti this.props-a
  // prevState = prethodna vrednost statea

  // this.props i this.state su novi trenutni
  // svaki put kada se promeni state ili property pozvace se ova fja
  // nama treba samo kada se promenio betslip, tj. duzina liste betslip koja sadrzi objekte
  componentDidUpdate(prevProps) { // prevProps = prethodne vrednosti this.props-a
    // poziva se automatski
    // treba samo da se implementira u komponenti

    if (prevProps.betSlip.length !== this.props.betSlip.length) {
      this.calculateTotalCoeficient();
    }

  }

  submitBetSlipClick = () => {
    this.props.submitBetSlip(this.state.amount, this.state.total_coefficient);
  }

  removeAllClick = () => {
    this.props.removeAll();
  }
// BetSlip._this.removeAllClick
  /*
  remove_all brise sve parove iz liste
  
  */

  calculateTotalCoeficient = () => {
    let totalCoeficient = 1;
    for (let bet of this.props.betSlip) {
      for (let game of this.props.games) {
        if (bet.id === game.id) {
          // game["bets"][bet.bet] = {odd: 1, type: 1}
          totalCoeficient *= game.bets[bet.bet].odd;
          break;
        }
      }
    }
    this.setState({total_coefficient: totalCoeficient});
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
    <BetSlipInfo aBet={aBet} />
        ))}
        <div className="container">
          <input type="submit" value="Remove all" onClick={this.removeAllClick}/> {/**/}
        </div>
        <div className="container">                
          {/*<form action="/action_page.php">*/}
          <label htmlFor="bet_amount">bet amount:</label>
          <input type="text" name="bet_amount" id="bet_amount" ref={this.myRef} onChange={this.saveAmount} />
          <input type="submit" value="Submit" onClick={this.submitBetSlipClick}/> {/**/}
          {/*</form>*/}
        </div>
        <div className="container">
          <span>total coeff: </span><span>{this.state.totalCoeficient}</span>
        </div> {/*this.calculateTotalCoeficient() mora da postoji return u toj funkciji*/}
        <div className="container"> {/*setuje se state ali mora on da se isprinta*/}
          <span id="possible_win_result">total winning: </span><span>{this.state.amount*this.state.totalCoeficient}</span>
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
