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

  /*
    2-3 komponente imaju ovu fju formatDate -
    izvaditi je u helper.js i exportovati je gde treba
  */
  formatDate = (date) => {
    return Date(date).toString();
  }

  /*
  submitted betslips
  betslip 1, details - komponenta - po jedan element niza submitted betslips saljemo onClick + fja iz popupa koja setuje stanje da je detail view otvoren - toggle
  betslip 2, details
  ...

  ---------------

  betslip 1 - komponenta
  game 1 - detaljno imena timova itd.
  game 2
  ...

  ----------------

  popup

  back dugme samo kad je detail view i ono ce da setuje current na null

  toggle f-ja:
      this.state = {
      current_betslip_details: null
    };  

  */

  render() {
    return ( <>
    <div className="outher-popup">
      {!this.state.current_betslip_details && <>
        {this.props.submited_betslips.map((submitted_betslip, index) => (
          <div className="container" key={"submitted_betslip" + index}>
            {/*<div>ok</div>*/}
            <SubmittedBetSlip submitted_betslip={submitted_betslip} handler={this.toggleList} />
          </div>
        ))}
      {/*close dugme dodati <span onClick={() => {this.togglePopup(false)}}> x </span>*/}
      </>
    }

    { this.state.current_betslip_details && <> {/*submitted_betslip={submitted_betslip}*/}
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
