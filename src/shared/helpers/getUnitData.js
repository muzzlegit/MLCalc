import PropTypes from "prop-types";
//DATA
import UNITS from "../data/UNITS.json";
import RACES from "../data/RACES.json";

function getUnitData(unitName, level, race, index, amount) {
  const getRateProperties = () => {
    const { attackMin, attackMax, ...rest } = RACES[race][unitName];
    const attack = index === "Min" ? attackMin : attackMax;
    const properties = { ...rest, attack };
    for (const key in properties) {
      properties[key] = properties[key][level - 1];
    }
    return properties;
  };
  const unit = {
    ...UNITS[unitName],
    level,
    amount,
    ...getRateProperties(),
  };

  return unit;
}

export default getUnitData;

getUnitData.propTypes = {
  unitName: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  race: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
