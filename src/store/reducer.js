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
  betslip: [] // in "SUBMIT_BETSLIP" case of reducer, when betslip is added, set betslip value of the store to empty array
};// setovati na prazan niz

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
       // {betslip: aNewState.betslip.concat([]), amount: amount , total_coefficient: total_coefficient}
       aNewState.submited_betslips = aNewState.submited_betslips.concat({betslip: aNewState.betslip.concat([]), amount: aAction.amount, total_coefficient: aAction.total_coefficient, date: Date.now()});
       aNewState.betslip = [];

       // sve sto smo odabrali iz tabele (sto je na betslipu) moraju da se poklope da bi dobili
       // zato imamo vise betslipova

       // dodati informaciju kada smo submitovali ticket - date
       

       // (1) napraviti novu komponentu - header
            // imace pop up dialog
            // sticky, top crna linija, u desnom cosku dugme ili tekst ili nesto sto ce da otvara popup
       // (2) u tom popupu treba da se izlistaju svi betslipovi koji su submitovani (submited_betslips izlistati)
            // 1. od datuma napraviti dan.mesec godina sat min sek - datum kolona
            // 2. total coefficient kolona (moze se desiti promena kvota, ali ostaje ista jer je vec submitovan tiket)
            // 3. bet amount kolona
            // 4. possible win kolona = 2. * 3. kolona
       // (3) popup treba da ima close dugme

       // mapstatetoprops
       // da li je otvoren popup ili nije - localstate
       

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