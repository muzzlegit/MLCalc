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
      // console.log(formattedBuffs);
      const playersArrays = getBuffsArraysByPlayers(formattedBuffs);
      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            const normalizedBuffsPlayer = playersArrays[key].buffsArray.map(buff => ({
              ...buff,
              player: name,
              source: player,
            }));
            addBuffs(name, normalizedBuffsPlayer);
          });
        }
      }
    },
    [addBuffs, player],
  );

  const removeBuff = useCallback(
    buffs => {
      const formattedBuffs = getFormattedBuffs(player, buffs);
      const playersArrays = getBuffsArraysByPlayers(formattedBuffs);
      for (const key in playersArrays) {
        if (playersArrays[key].buffsArray.length) {
          playersArrays[key].playerNames.forEach(name => {
            removeBuffs(name, playersArrays[key].buffsArray);
          });
        }
      }
    },
    [player, removeBuffs],
  );

  return { applyBuffs, removeBuff };
}

export default useBuffsProvider;
