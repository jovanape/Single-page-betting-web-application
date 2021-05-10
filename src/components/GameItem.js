import React, {Component} from 'react';

class GameItem extends Component {

    render () {
        return <>
            <div className="div-table-row">
                <div className="first-col">{this.props.bet.home_team + "--" + this.props.bet.away_team}</div>
                <div className="div-cell">  {this.props.bet.bets["1"].odd} </div>
                {/*<div className="div-cell" onClick = {this.props.addbet}> 2.15 </div>*/}
                <div className="div-cell"> {this.props.bet.bets["X"].odd} </div>
                <div className="div-cell">  {this.props.bet.bets["2"].odd} </div>
            </div>
            </>;

    }

}

export default GameItem;
