import React, {Component} from 'react';
import './BetSlip.css';

class BetSlip extends Component {

    render () {
        return <>

        <div className = "outher">
            <div className="head">
                <span>_</span> <span>Betslip</span>
            </div>
            <div className="container">
                <div>
                    <p className="heading-line">Chelsea</p>
                    <p className = "description">Bottom line</p>
                    <p className = "description">Chelsea: Real Madrid</p>
                </div>
                <div className="right-container">
                    <div className="remove">x</div>
                    <div className="coef-right">1.75</div>
                </div>
            </div>
            <div className="container">
                <div>
                    <p className = "heading-line">draw</p>
                    <p className = "description">Bottom line</p>
                    <p className = "description">Arsenal: Villarreal</p>
                </div>
                <div className="right-container">
                    <div className="remove">x</div>
                    <div className="coef-right">2.30</div>
                </div>
            </div>
            <div className="container">                
                {/*<form action="/action_page.php">*/}
                <label for="fname">bet amount:</label>
                <input type="text" id="fname" name="fname"/>
                <input type="submit" value="Submit"/>
                {/*</form>*/}
            </div>
            <div className="container">
                total winning
            </div>
            <div className="bottom">
                <span>Sports Betting</span> <span>Live</span> <span>Promos</span> <span>Betting slip</span> <span>My bets</span>
            </div>
        </div>

</>;

}

}

export default BetSlip;
