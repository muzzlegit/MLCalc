import create from "zustand";
import { immer } from "zustand/middleware/immer";
//----------- STORE -----------
const useAttackRateStore = create(
  immer((set, get) => ({
    //MAIN ATTACKER --------------------------------
    mainAttacker: "Min",
    // MAIN ATTACKER ALLY --------------------------
    attackerAlly: "Min",
    //MAIN DEFENDER --------------------------------
    mainDefender: "Min",
    //firstDefenderAlly --------------------------
    firstDefenderAlly: "Min",
    //secondDefenderAlly --------------------------
    secondDefenderAlly: "Min",
    //FUNCTIONS --------------------------------
    functions: {
      setRate: (player, rate) =>
        set(state => {
          state[player] = rate;
        }),
    },
  })),
);

export default useAttackRateStore;
