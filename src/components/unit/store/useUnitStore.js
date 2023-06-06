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
              state[player] = state[player].map(trooper => {
                if (trooper.unit === newTrooper.unit) {
                  return {
                    ...trooper,
                    ...newTrooper,
                    properties: [
                      ...newTrooper.properties,
                      ...trooper.properties.filter(property => property.measure === "number"),
                    ],
                  };
                } else {
                  return trooper;
                }
              });
            }),
          setUnitProperty: (player, unit, property, value) =>
            set(state => {
              if (player === "mainAttacker" && unit === "porter" && property === "defense")
                console.log(value);
              let [currentUnit] = state[player].filter(trooper => trooper.unit === unit);
              currentUnit = {
                ...currentUnit,
                properties: currentUnit.properties.map(item =>
                  item.measure === "number" && item.name === property ? { ...item, value } : item,
                ),
                enhancements: { ...currentUnit.enhancements, [property]: value },
              };
              state[player] = state[player].map(trooper =>
                trooper.unit === currentUnit.unit ? { ...currentUnit } : trooper,
              );
            }),
        },
      }),
      { name: "UnitStore" },
    ),
  ),
);

export default useUnitStore;
