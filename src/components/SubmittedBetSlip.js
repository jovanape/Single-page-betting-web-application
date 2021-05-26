import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { formatDate } from './Helper'

class SubmittedBetSlip extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( <>
      <div>
      <p className="description">{"Date and time: " + formatDate(this.props.submitted_betslip.date)}</p>
        <p className="description">{"Total coefficient: " + this.props.submitted_betslip.total_coefficient}</p>
        <p className="description">{"amount: " + this.props.submitted_betslip.amount}</p>
        <p className="description">{"Total possible win: " + this.props.submitted_betslip.amount * this.props.submitted_betslip.total_coefficient}</p>
        <div className="">
          <div className="description details-button" onClick={() => {this.props.handler(this.props.submitted_betslip)}}>
            details
          </div>
        </div>
      </div>
    </> )
    }

  }


  export default connect (null, null)(SubmittedBetSlip);
