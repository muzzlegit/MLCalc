import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

//----------- STORE -----------
const useGlobalBuffsStore = create(
  devtools(
    immer(
      (set, get) => ({
        globalBuffsStorage: [],
        functions: {
          addBuffToGlobalStorage: buff =>
            set(state => {
              state.globalBuffsStorage = [...state.globalBuffsStorage, buff];
            }),
          removeBuffFromGlobalStorage: buff =>
            set(state => {
              state.globalBuffsStorage = state.globalBuffsStorage.filter(
                item => item.id !== buff.id,
              );
            }),
        },
      }),
      { name: "UnitStore" },
    ),
  ),
);

export default useGlobalBuffsStore;
