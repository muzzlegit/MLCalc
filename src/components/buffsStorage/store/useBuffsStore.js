import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//CONSTS
const defaultDefenseLevel = {
  id: "nRC1VO01ZEqP0V1t8Eq5_g",
  source: "nRC1VO01ZEqP0V1t8Eq5_g",
  character: "default",
  player: "mainAttacker",
  target: "player",
  appliedOn: "all",
  unit: "units",
  units: ["porter", "swordsman", "cavalier", "flying", "archer", "healer", "mercenary", "mage"],
  property: "defenseLevel",
  measure: "number",
  value: 50,
  description: "Дефолтный предел защиты",
};
//----------- STORE -----------
const useBuffsStore = create(
  devtools(
    immer(
      (set, get) => ({
        //MAIN ATTACKER --------------------------------
        mainAttacker: [defaultDefenseLevel],
        // MAIN ATTACKEdefaultDefenseLevelR ALLY --------------------------
        attackerAlly: [],
        //MAIN DEFENDER --------------------------------
        mainDefender: [defaultDefenseLevel],
        //firstDefenderAlly --------------------------
        firstDefenderAlly: [defaultDefenseLevel],
        //secondDefenderAlly --------------------------
        secondDefenderAlly: [defaultDefenseLevel],
        //FUNCTIONS --------------------------------
        functions: {
          addBuff: (player, buff) =>
            set(state => {
              if (
                !state[player].filter(item => item.id === buff.id && item.source === buff.source)
                  .length
              ) {
                state[player] = [...state[player], buff];
              }
            }),
          removeBuff: (player, buff) =>
            set(state => {
              state[player] = state[player].filter(
                item => item.id !== buff.id || item.source !== buff.source,
              );
            }),
        },
      }),
      { name: "BuffsStore" },
    ),
  ),
);

export default useBuffsStore;
