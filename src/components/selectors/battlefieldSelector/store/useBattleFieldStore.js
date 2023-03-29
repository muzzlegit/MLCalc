import create from "zustand";
import { immer } from "zustand/middleware/immer";
//----------- STORE -----------
const useBattleFieldStore = create(
  immer((set, get) => ({
    battlefield: "cursedForest",
    structure: "town",
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
);

export default useBattleFieldStore;
