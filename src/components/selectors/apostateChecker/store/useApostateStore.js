import create from "zustand";
import { immer } from "zustand/middleware/immer";
//----------- STORE -----------
const useApostateStore = create(
  immer((set, get) => ({
    //MAIN ATTACKER --------------------------------
    mainAttacker: false,
    // MAIN ATTACKER ALLY --------------------------
    attackerAlly: false,
    //MAIN DEFENDER --------------------------------
    mainDefender: false,
    //firstDefenderAlly --------------------------
    firstDefenderAlly: false,
    //secondDefenderAlly --------------------------
    secondDefenderAlly: false,
    //FUNCTIONS --------------------------------
    functions: {
      setApostate: player =>
        set(state => {
          state[player] = !state[player];
        }),
    },
  })),
);

export default useApostateStore;
