import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//DATA
import UNITS from "../data/UNITS.json";
//----------- STORE -----------
const useUnitStore = create(
  devtools(
    immer(
      (set, get) => ({
        //MAIN ATTACKER --------------------------------
        mainAttacker: UNITS,
        // MAIN ATTACKER ALLY --------------------------
        attackerAlly: UNITS,
        //MAIN DEFENDER --------------------------------
        mainDefender: UNITS,
        //firstDefenderAlly --------------------------
        firstDefenderAlly: UNITS,
        //secondDefenderAlly --------------------------
        secondDefenderAlly: UNITS,
        //FUNCTIONS --------------------------------
        functions: {
          setUnit: (player, newTrooper) =>
            set(state => {
              state[player] = state[player].map(trooper =>
                trooper.unit === newTrooper.unit ? { ...trooper, ...newTrooper } : trooper,
              );
            }),
          setUnitProperty: (player, unit, property, value) =>
            set(state => {
              let [currentUnit] = state[player].filter(trooper => trooper.unit === unit);
              currentUnit.enhancements = { ...currentUnit.enhancements, [property]: value };
              state[player] = state[player].map(trooper =>
                trooper.unit === currentUnit.unit ? currentUnit : trooper,
              );
            }),
        },
      }),
      { name: "UnitStore" },
    ),
  ),
);

export default useUnitStore;
