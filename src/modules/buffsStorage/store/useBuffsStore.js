import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//----------- STORE -----------
const useBuffsStore = create(
  devtools(
    immer(
      (set, get) => ({
        //MAIN ATTACKER --------------------------------
        mainAttacker: [],
        // MAIN ATTACKER ALLY --------------------------
        attackerAlly: [],
        //MAIN DEFENDER --------------------------------
        mainDefender: [],
        //firstDefenderAlly --------------------------
        firstDefenderAlly: [],
        //secondDefenderAlly --------------------------
        secondDefenderAlly: [],
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
                item => item.id !== buff.id && item.source === buff.source,
              );
            }),
        },
      }),
      { name: "BuffsStore" },
    ),
  ),
);

export default useBuffsStore;
