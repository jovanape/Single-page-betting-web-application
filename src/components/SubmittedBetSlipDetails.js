import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Popup from './Popup';


class SubmittedBetSlipDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current_betslip_details: null
    };  
  }

  render() {
    return ( <>

      <div className="popup-container" id="popup" ref={this.myRef}>
      
      <div className="">
        <div className="details-title">Current submitted betslip details</div>
        <div>{"amount: " + this.state.current_betslip_details.amount}</div>
        <div>{"total coef: " + this.state.current_betslip_details.total_coefficient}</div>
        <div>{"date: " + this.state.current_betslip_details.date}</div>
        <div>-------------------------------</div>
        {this.state.current_betslip_details.betslip.map((current_betslip) => (
          <>
            <div>{"index: " + current_betslip.id}</div>
            <div>{"bet: " + current_betslip.bet}</div>
            <div>-------------------------------</div>
          </>
        ))} {/* ovo treba da bue posebna f-ja {this.setState({current_betslip_details: null}*/}
          <div className="description details-button" onClick={() => {this.setState({current_betslip_details: null})}}>
            back
          </div>
        </div>
      </div>

</>
    );

}

}

export default connect (null, null)(SubmittedBetSlipDetails);
