import create from "zustand";
import { immer } from "zustand/middleware/immer";
//DATA
import UNITS from "../data/Units.json";
//CONSTs
const initialUnitsArray = UNITS.filter(unit => unit.race === "undead");
//----------- STORE -----------
const useUnitStore = create(
  immer((set, get) => ({
    //MAIN ATTACKER --------------------------------
    mainAttacker: [...initialUnitsArray],
    // MAIN ATTACKER ALLY --------------------------
    attackerAlly: [...initialUnitsArray],
    //MAIN DEFENDER --------------------------------
    mainDefender: [...initialUnitsArray],
    //firstDefenderAlly --------------------------
    firstDefenderAlly: [...initialUnitsArray],
    //secondDefenderAlly --------------------------
    secondDefenderAlly: [...initialUnitsArray],
    //FUNCTIONS --------------------------------
    functions: {
      setUnit: (player, unit) =>
        set(state => {
          state[player] = state[player].map(currentUnit =>
            currentUnit.name === unit.name ? { ...unit } : currentUnit,
          );
        }),
    },
  })),
);

export default useUnitStore;
