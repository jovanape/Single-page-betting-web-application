import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Popup from './Popup';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      popupOpened: false
    };  
  }

  togglePopup = (popupIsOpened) => {
    this.setState({popupOpened: popupIsOpened})
  }

  render() {
    return <>
      <div className="header-popup-container">
        { !this.state.popupOpened && <>
          <div className="header-line">
            <span className="submited-betslips-text" onClick={() => {this.togglePopup(true)}}> Submited betslips </span>
          </div>
        </>
        }
        { this.state.popupOpened && <>
          <div className="">
            <div className="header-line">
              <span className="submited-betslips-text" onClick={() => {this.togglePopup(false)}}>
                close
              </span>
            </div>
            <Popup/>
          </div>
        </>
        }
      </div>
    </>;
  }
}

export default connect (null, null)(Header);
