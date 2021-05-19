import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';


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
  }

  toggleList = (current_betslip) => {
    this.setState({current_betslip_details: current_betslip})
    // const popup = this.myRef.current;
    // this.myRef.current.value
    // popup.classList.toggle("show");
  }

  formatDate = (date) => {
    return Date(date).toString();
  }

  render() {
    return ( <>
    <div className="outher-popup">
      {!this.state.current_betslip_details && <>
        {this.props.submited_betslips.map((submitted_betslip, index) => (
          <div className="container" key={"submitted_betslip" + index}>
            <div> {/*ispraviti redosled datum pa total_coef pa amount pa total possible win*/}
              <p className="description">{"Date and time: " + this.formatDate(submitted_betslip.date)}</p>
              <p className="description">{"Total coefficient: " + submitted_betslip.total_coefficient}</p>
              <p className="description">{"amount: " + submitted_betslip.amount}</p>
              <p className="description">{"Total possible win: " + submitted_betslip.amount * submitted_betslip.total_coefficient}</p>
                <div className="">
                  <div className="description details-button"
                        onClick={() => {this.toggleList(submitted_betslip)}}>
                    details
                  </div>
                </div>
            </div>
          </div>
        ))}
      {/*close dugme dodati <span onClick={() => {this.togglePopup(false)}}> x </span>*/}
      </>
    }

    { this.state.current_betslip_details && <>

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
        ))}
          <div className="description details-button" onClick={() => {this.setState({current_betslip_details: null})}}>
            back
          </div>
        </div>
      </div>
    </>
    }
    </div>
    </>
    );
  }
}


export default connect (mapStatetoProps, null)(Popup);
