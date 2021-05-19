import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Popup from './Popup';



/*
  1. back dugme
  2. napraviti da bude popup
  3. popup komponenta:
    - heder sadrzi da li je popup otvoren
    - popup sadrzi sve ostalo u vezi popup-a
*/

/*
  posebne komponente:
  1. popup - da zna koja lista je otvorena --> ovo samo uraditi

  2. list view - submited_betslips
  3. detail view - da zna koji trenutno tiket prikazuje

  iz hedera zovemo samo popup
  zvacemo samo komponentu a ne i html
  u komponenti popupopen mozemo u state
*/


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // popupOpened: false,
      current_betslip_details: null
    };  

    this.myRef = React.createRef();
  }


  /*togglepopup*/
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
              <span className="submited-betslips-text"> Submited </span>
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
