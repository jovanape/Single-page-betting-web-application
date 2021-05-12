export const addBet = (newBet) => ({
  type: "ADD_BET",
  payload: newBet
});

export const removeBet = (betId) => ({
  type: "REMOVE_BET",
  betId: betId
});