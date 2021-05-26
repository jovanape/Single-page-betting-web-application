import React, { Component } from 'react';
import { connect } from 'react-redux';
import BetslipInfo from './BetslipInfo';
import './Header.css';

class SubmittedBetSlipDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( <>
      <div className="popup-container" id="popup" ref={this.myRef}>
        <div className="">
          <div className="details-title">Current submitted betslip details</div>
          <div>{"amount: " + this.props.current_betslip_details.amount}</div>
          <div>{"total coef: " + this.props.current_betslip_details.total_coefficient}</div>
          <div>{"date: " + this.props.current_betslip_details.date}</div>
          <div>-------------------------------</div>
          {this.props.current_betslip_details.betslip.map((current_betslip) => (
            <>
              <BetslipInfo aBet={current_betslip}/>
              {/* napraviti komponentu (nema nikakvo lokalno stanje ili share sa storom)
              ova komponenta ce sadrzati funkcije pomocu kojih izvlaci informacije iz objekta
              kao sto je funkcija getname() itd.
              ta fja prima objekat koji joj treba i od njega stvara sve sto joj treba
              fleg koji ce da prikaze ili ne prikaze remove item
              treba remove fja da se prosledi a ako se ne prosledi onda je null, ne treba fleg */}
            </>
          ))}
        </div>
      </div>
    </>
    );
  }
}

export default connect (null, null)(SubmittedBetSlipDetails);
