import Feed from "./../feed";

const aInitialState = {
  ...Feed,
  submited_betslips: [], // sve betove, jedan elem niza je {betslip(obj), amount, total_coef}
  /*
    betslip: [
      {
        id: 1,
        bet: "1"
      },
      {
        id: 2,
        bet: "x"
      },
        15
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

    case "SUBMIT_BETSLIP":
      aNewState.submited_betslips = aNewState.submited_betslips.concat({betslip: aNewState.betslip.concat([]), amount: aAction.amount, total_coefficient: aAction.total_coefficient, date: Date.now()});
      aNewState.betslip = [];
      break;

    case "REMOVE_BETSLIP":
      aNewState.betslip = [];
      break;

    default:
      break;
  }

  return aNewState;
};

export default aRootReducer;