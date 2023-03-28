import create from "zustand";
import { immer } from "zustand/middleware/immer";
//----------- STORE -----------
const useRaceStore = create(
  immer((set, get) => ({
    //MAIN ATTACKER --------------------------------
    mainAttacker: "undead",
    // MAIN ATTACKER ALLY --------------------------
    attackerAlly: "undead",
    //MAIN DEFENDER --------------------------------
    mainDefender: "undead",
    //firstDefenderAlly --------------------------
    firstDefenderAlly: "undead",
    //secondDefenderAlly --------------------------
    secondDefenderAlly: "undead",
    //FUNCTIONS --------------------------------
    functions: {
      setRace: (player, race) =>
        set(state => {
          state[player] = race;
        }),
    },
  })),
);

export default useRaceStore;
