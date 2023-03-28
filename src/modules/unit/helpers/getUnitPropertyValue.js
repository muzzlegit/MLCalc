import PropTypes from "prop-types";
import limits from "constants/limits";

function getUnitPropertyValue(property, enhancements) {
  const { name } = property;
  const value = enhancements[name];
  if (name === "defense") {
    const defenseLevel = enhancements.defenseLevel;
    const maxDefense = defenseLevel <= limits.defenseLevel ? defenseLevel : limits.defenseLevel;
    if (value < 0) return `0 ( ${value} )`;
    if (value <= maxDefense) return value;
    if (value > maxDefense) return `${maxDefense} ( ${value} )`;
  } else {
    if (value < 0) {
      return `0 ( ${value} )`;
    } else {
      return value;
    }
  }
}

export default getUnitPropertyValue;

getUnitPropertyValue.propTypes = {
  property: PropTypes.object.isRequired,
  enhancements: PropTypes.object.isRequired,
};
