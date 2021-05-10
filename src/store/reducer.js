import Feed from "./../feed";

const aInitialState = {
  ...Feed,
  my_bets: []
};

const aRootReducer = (aState = aInitialState, aAction) => {
  const aNewState = {...aState};
  switch (aAction.type) {
    case "ADD_BET":
      aNewState.my_bets = aNewState.my_bets.concat([{
        bet: 5
      }]);
      break;

    default:
      break;
  }

  return aNewState;
};

export default aRootReducer;