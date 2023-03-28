import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//STORE
import useUnitStore from "../store/useUnitStore";
//HOOKS
import useRace from "modules/raceSelector/hooks/useRace";
//DATA
import RACES from "../data/RACES.json";
import UNITS from "../data/UNITS.json";

function useUnit(player, unitName) {
  const setUnit = useUnitStore(state => state.functions.setUnit);
  const { race } = useRace();

  const [level, setLevel] = useState(1);
  const [amount, setValue] = useState(0);

  const onLevelClick = () => {
    level === 4 ? setLevel(1) : setLevel(prev => prev + 1);
  };

  const onAmountChange = e => {
    if (isNaN(Number(e.currentTarget.value))) return;
    setValue(Number(e.currentTarget.value));
  };

  //USE EFFECT
  useEffect(() => {
    const improvements = RACES[race][unitName];
    let [defaultUnit] = UNITS.filter(trooper => trooper.unit === unitName);
    const { enhancements, ...rest } = defaultUnit;

    defaultUnit = {
      ...rest,
      properties: defaultUnit.properties.map(property => {
        if (property.name === "amount") return { ...property, value: amount };
        if (property.name === "attack")
          return { ...property, value: improvements[`attack${property.index}`][level - 1] };
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
    console.log(newUnit);
    setUnit(player, newUnit);
  }, [amount, player, level, setUnit, unitName, race]);

  return { onLevelClick, onAmountChange };
}

export default useUnit;

useUnit.propTypes = {
  player: PropTypes.string.isRequired,
  unitName: PropTypes.string.isRequired,
};
