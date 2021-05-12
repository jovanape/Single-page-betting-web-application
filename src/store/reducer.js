import Feed from "./../feed";

const aInitialState = {
  ...Feed,
  my_bets: [],
  /*
    betslip: [
     {
        id: 1,
        bet: "1"
      },
      {
        id: 2,
        bet: "x"
       }
      ]
  */
  betslip: []
};

const aRootReducer = (aState = aInitialState, aAction) => {
  const aNewState = { ...aState };
  switch (aAction.type) {
    case "ADD_BET":
      aNewState.betslip = aNewState.betslip.concat([aAction.payload]);

      /*
      {
        id: 1,
        bet: 5
      }
      */

      break;

    case "REMOVE_BET":
      aNewState.betslip = aNewState.betslip.filter(x => x.id !== aAction.betId);
      break;
    default:
      break;
  }

  return aNewState;
};

export default aRootReducer;