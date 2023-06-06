import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
//----------- STORE -----------
const useBattleFieldStore = create(
  devtools(
    immer((set, get) => ({
      battlefield: "cursedForest",
      structure: "town",
      garrison: {},
      towers: [],
      fortifications: [],
      race: "monsters",

      //FUNCTIONS --------------------------------
      functions: {
        setBattlefield: battlefield =>
          set(state => {
            state.battlefield = battlefield;
          }),
        setStructure: structure =>
          set(state => {
            state.structure = structure;
          }),
      },
    })),
    { name: "battlefield" },
  ),
);

export default useBattleFieldStore;
