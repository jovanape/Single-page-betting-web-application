import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import SubmittedBetSlip from './SubmittedBetSlip';
import SubmittedBetSlipDetails from './SubmittedBetSlipDetails';

const mapStatetoProps = (state, ownProps) =>
{
  return {
    submited_betslips: state.submited_betslips
  };
};

class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current_betslip_details: null
    };

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList = (current_betslip) => {
    this.setState({current_betslip_details: current_betslip})
  }

  render() {
    return ( <>
      <div className="outher-popup">
        {!this.state.current_betslip_details && <>
          {this.props.submited_betslips.map((submitted_betslip, index) => (
            <div className="container" key={"submitted_betslip" + index}>
              <SubmittedBetSlip submitted_betslip={submitted_betslip} handler={this.toggleList} />
            </div>
          ))}
        </>
      }

      { this.state.current_betslip_details && <>
        <div className="description details-button" onClick={() => {this.setState({current_betslip_details: null})}}>
          back
        </div>
        <SubmittedBetSlipDetails current_betslip_details={this.state.current_betslip_details}/>
      </>
      }
      </div>
    </>
    );
  }
}


export default connect (mapStatetoProps, null)(Popup);
