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

  da li je detail view ili ne mora da zna popup
  obe komponente moraju da dobiju jenu f-ju koja ce da setuje state

  -------------------------------------
  popup - ima state
  lista - jedan obj submitted betslip saljemo i on radi sa njim
  + funkciju koja ce da setuje state (ta fja je u popup-u), nema state

  list iteme 
  komponenta sadrzi jedan listic = jedan betslip = to je list items, prosledimo mu jedan obj...
  u popupu zavrstimo koliko puta treba

  back button moze da pripada popupu, ne mora detail view-u
  svaki item ima jedno dugme za details, kad se klikne treba detaljan prikaz - popupu setujemo da je detail view otvoren
  toggle list saljemo jednom listicu (betslipu), on ce ga pozvati i proslediti svoju konfiguraciju (betslip objekta submitted betslip)
  detail view sadrzi 

*/


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      popupOpened: false
    };  
  }


  /*togglepopup*/
  togglePopup = (popupIsOpened) => {
    this.setState({popupOpened: popupIsOpened})
  }

  render() {
    return <>
      <div className="header-popup-container">
        {/*
        - header line ovde
        - poslati celu fju togglePopup komponenti popup - zbog close button-a
        - kada je popup otvoren ne prikazuj submitted betslip dugme dok se ne zatvori popup
        */}
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
