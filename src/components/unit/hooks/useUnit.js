import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//STORE
import useUnitStore from "../store/useUnitStore";
//HOOKS
import useRace from "components/selectors/raceSelector/hooks/useRace";
import useAttackRate from "components/selectors/attackRateSelector/hooks/useAttackRate";
import useUnitsBuffs from "./useUnitsBuffs";
//DATA
import RACES from "../data/RACES.json";
import UNITS from "../data/UNITS.json";

function useUnit(player, unitName) {
  const setUnit = useUnitStore(state => state.functions.setUnit);
  const { race } = useRace();
  const { index } = useAttackRate();

  const [level, setLevel] = useState(1);
  const [amount, setValue] = useState(0);
  const onLevelClick = () => {
    level === (race === "monsters" ? 3 : 4) ? setLevel(1) : setLevel(prev => prev + 1);
  };

  const onAmountChange = e => {
    if (isNaN(Number(e.currentTarget.value))) return;
    setValue(Number(e.currentTarget.value));
  };
  // USE EFFECT
  useEffect(() => {
    if (race === "monsters" && level === 4) {
      setLevel(3);
    }

    const improvements = RACES[race][unitName];
    let [defaultUnit] = UNITS.filter(trooper => trooper.unit === unitName);
    const { enhancements, ...rest } = defaultUnit;
    defaultUnit = {
      ...rest,
      properties: defaultUnit.properties
        .filter(property => property.measure !== "number")
        .map(property => {
          if (property.name === "amount") return { ...property, value: amount };
          if (property.name === "capacity")
            return { ...property, value: improvements.capacity[level - 1] };
          if (property.name === "attack")
            return { ...property, value: improvements[`attack${index}`][level - 1] };
          if (property.name === "health")
            return { ...property, value: improvements.health[level - 1] };
          if (property.name === "resurrection")
            return { ...property, value: improvements.resurrection[level - 1] };
          if (property.name === "towersSuppression")
            return { ...property, value: improvements.towersSuppression[level - 1] };
          return property;
        }),
    };
    const newUnit = { ...defaultUnit, race, level, name: improvements.name[level - 1] };
    setUnit(player, newUnit);
  }, [amount, player, level, setUnit, unitName, index, race]);

  return { onLevelClick, onAmountChange };
}

// export default useUnit;

useUnit.propTypes = {
  player: PropTypes.string.isRequired,
  unitName: PropTypes.string.isRequired,
};
