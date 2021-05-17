export const addBet = (newBet) => ({
  type: "ADD_BET",
  payload: newBet
});

export const removeBet = (betId) => ({
  type: "REMOVE_BET",
  betId: betId
});

export const addPossibleWin = () => ({
  type: "ADD_POSSIBLE_WIN"
});


export const submitBetSlip = (amount, total_coefficient) => ({
  type: "SUBMIT_BETSLIP",
  amount: amount,
  total_coefficient: total_coefficient
});