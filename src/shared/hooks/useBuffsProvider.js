import { useCallback } from "react";
//CONTEXT
import usePlayerContext from "./usePlayerContext";
//STORE
import useStore from "store/useStore";
//HELERS
import { getBuffsArraysByPlayers, getFormattedBuffs } from "shared/helpers";

function useBuffsProvider() {
  const player = usePlayerContext();
  const { addBuffs, removeBuffs } = useStore(state => state.functions);

  const applyBuffs = useCallback(
    buffs => {
      const formattedBuffs = getFormattedBuffs(player, buffs);
      const playersArrays = getBuffsArraysByPlayers(formattedBuffs);
      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            addBuffs(name, playersArrays[key].buffsArray);
          });
        }
      }
    },
    [addBuffs, player],
  );

  const removeBuff = useCallback(
    buffs => {
      const playersArrays = getBuffsArraysByPlayers(buffs);
      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            removeBuffs(name, playersArrays[key].buffsArray);
          });
        }
      }
    },
    [removeBuffs],
  );

  return { applyBuffs, removeBuff };
}

export default useBuffsProvider;
