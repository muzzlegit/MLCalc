import PropTypes from "prop-types";
import { useEffect } from "react";
//CONTEXT
import usePlayerContext from "shared/hooks/usePlayerContext";
//STORE
import useUnitStore from "../store/useUnitsStore";
//HELPERS
import getUnitData from "../helpers/getUnitData";

function useUnit(unitName) {
  const player = usePlayerContext();
  const unitDate = useUnitStore(state => state[player][unitName]);
  const race = useUnitStore(state => state[player].race);
  const attackIndex = useUnitStore(state => state[player].attackIndex);
  const { setUnit, setUnitLevel, setUnitAmount } = useUnitStore(state => state.functions);
  const { level, amount } = unitDate;

  const changeLevel = () => {
    level === (race === "monsters" ? 3 : 4)
      ? setUnitLevel(player, unitName, 1)
      : setUnitLevel(player, unitName, level + 1);
  };

  const changeAmount = value => {
    if (isNaN(Number(value))) return;
    setUnitAmount(player, unitName, Number(value));
  };

  useEffect(() => {
    const unitLevel = race === "monsters" && level === 4 ? 3 : level;
    setUnit(player, getUnitData(unitName, unitLevel, race, attackIndex, amount));
  }, [player, unitName, level, race, attackIndex, amount, setUnit]);

  return { unitDate, changeLevel, changeAmount };
}

export default useUnit;

useUnit.propTypes = {
  unitName: PropTypes.string.isRequired,
};
