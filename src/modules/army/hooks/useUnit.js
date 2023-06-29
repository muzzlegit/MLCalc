import { useEffect, useCallback } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useStore from "store/useStore";
//HELPERS
import { getUnitData } from "shared/helpers";

function useUnit(unitName) {
  const player = usePlayerContext();
  const unitData = useStore(state => state[player][unitName]);
  const { race, attackIndex } = useStore(state => state[player]);
  const { setUnit, setUnitLevel, setUnitAmount } = useStore(state => state.functions);
  const { level, amount, unit } = unitData;

  const changeLevel = useCallback(() => {
    level === (race === "monsters" ? 3 : 4)
      ? setUnitLevel(player, unitName, 1)
      : setUnitLevel(player, unitName, level + 1);
  }, [level, player, race, setUnitLevel, unitName]);

  const changeAmount = useCallback(
    value => {
      if (isNaN(Number(value))) return;
      setUnitAmount(player, unitName, Number(value));
    },
    [player, setUnitAmount, unitName],
  );

  useEffect(() => {
    const unitLevel = race === "monsters" && level === 4 ? 3 : level;
    setUnit(player, getUnitData(unit, unitLevel, race, attackIndex, amount));
  }, [player, unit, level, race, attackIndex, amount, setUnit]);

  return { unitData, changeLevel, changeAmount };
}

export default useUnit;
