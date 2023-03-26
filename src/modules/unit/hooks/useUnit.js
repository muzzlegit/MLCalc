import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//DATA
import UNITS from "../data/Units.json";
//STORE
import useUnitStore from "../store/useUnitStore";

function useUnit(player, unitName, race) {
  const setUnit = useUnitStore(state => state.functions.setUnit);
  const [level, setLevel] = useState(1);
  const [amount, setValue] = useState(0);

  const onLevelClick = () => {
    console.log(level);
    level === 4 ? setLevel(1) : setLevel(prev => prev + 1);
  };

  const onAmountChange = e => {
    if (isNaN(Number(e.currentTarget.value))) return;
    setValue(Number(e.currentTarget.value));
  };

  //USE EFFECT
  useEffect(() => {
    let [currentUnit] = UNITS.filter(trooper => trooper.unit === unitName && trooper.race === race);
    if (!currentUnit) return;
    currentUnit = { ...currentUnit, level };
    currentUnit.properties = currentUnit.properties.map(property => {
      switch (property.name) {
        case "amount":
          return { ...property, value: amount };
        case "attack":
          return { ...property, value: property[`attack${property.index}Array`][level - 1] };
        case "health":
          return { ...property, value: property.healthArray[level - 1] };
        case "resurrection":
          return { ...property, value: property.resurrectionArray[level - 1] };
        case "towersSuppression":
          return { ...property, value: property.towersSuppressionArray[level - 1] };
        default:
          return property;
      }
    });
    setUnit(player, currentUnit);
  }, [amount, player, level, setUnit, race, unitName]);

  return { onLevelClick, onAmountChange };
}

export default useUnit;

useUnit.propTypes = {
  player: PropTypes.string.isRequired,
  unitName: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
};
